import {React, useEffect, useState} from 'react';
import Nav from '../../Components/Navigation/Nav';
import '../Pages.css';
import {db, auth} from '../../config/firebase';
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore';

const Sets = () => {
  const [sets, setSets] = useState([]);
  const [newSetName, setNewSetName] = useState("");
  const [newTerm, setNewTerm] = useState("");
  const [newDefinition, setNewDefinition] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const setsCollectionRef = collection(db, "Sets");

  // Fetch Sets
  const getSets = async() => {
    try{
      const data = await getDocs(setsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id, 
        Flashcards: doc.data().Flashcards || []  // Ensure Flashcards is an array
      }));
      setSets(filteredData);
    } catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    getSets();
  }, []);

  // Add Flashcard to current list (before submitting the entire set)
  const addFlashcardToList = () => {
    setFlashcards([...flashcards, { Term: newTerm, Definition: newDefinition, Correct: 0, Incorrect: 0 }]);
    setNewTerm("");
    setNewDefinition("");
  };

  // Submit New Set with all Flashcards
  const onSubmitSet = async () => {
    try{
      await addDoc(setsCollectionRef, { SetName: newSetName, userId: auth?.currentUser?.uid, Flashcards: flashcards });
      setFlashcards([]);
      setNewSetName("");
      getSets();
    } catch(err){
      console.error(err);
    }
  };

  // Delete Entire Set
  const deleteSet = async (id) => {
    const setDoc = doc(db, "Sets", id);
    await deleteDoc(setDoc);
    getSets();
  };

  // Update Flashcard in a Set
  const updateFlashcard = async (setId, flashcardIndex, newDefinition) => {
    const setDoc = doc(db, "Sets", setId);
    const selectedSet = sets.find((set) => set.id === setId);
    if (selectedSet) {
      selectedSet.Flashcards[flashcardIndex].Definition = newDefinition;
      await updateDoc(setDoc, { Flashcards: selectedSet.Flashcards });
      getSets();
    }
  };

  return (
    <div className='wrapper-pages'>
      <Nav></Nav>
      <div className="CreateSets">
        <input placeholder="Set Name" value={newSetName} onChange={(e) => setNewSetName(e.target.value)} />
        <input placeholder="Term" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} />
        <input placeholder="Definition" value={newDefinition} onChange={(e) => setNewDefinition(e.target.value)} />
        <button onClick={addFlashcardToList}>Add Flashcard</button>
        <button onClick={onSubmitSet}>Submit Set</button>
      </div>

      <div className='Sets'>
        {sets.map((set) => (
          <div key={set.id}>
            <h3>{set.SetName}</h3>
            {set.Flashcards && set.Flashcards.map((flashcard, index) => (
              <div key={index}>
                <p>Term: {flashcard.Term}</p>
                <p>Definition: {flashcard.Definition}</p>
                <p>Correct: {flashcard.Correct}</p>
                <p>Incorrect: {flashcard.Incorrect}</p>
                <input placeholder="New Definition..." onChange={(e) => setNewDefinition(e.target.value)} />
                <button onClick={() => updateFlashcard(set.id, index, newDefinition)}>Update Definition</button>
              </div>
            ))}
            <button onClick={() => deleteSet(set.id)}>Delete Set</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sets;
