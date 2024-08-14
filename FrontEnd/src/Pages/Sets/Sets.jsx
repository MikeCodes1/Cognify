import {React, useEffect, useState} from 'react'
import Nav from '../../Components/Navigation/Nav';
import '../Pages.css';
import {db, auth} from '../../config/firebase'
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'

const Sets = () => {

  //FIXME **CHECK DATABASE AND POSSIBLY CHANGE ALL OF THESE TO THE DB FOR SETS WITH MAPS **
  //FIXME ** UPDATE DEF WILL CHANGE A DIFFERENT FLASHCARDS IF YOU CLICK THE OTHER FLASHCARDS CAN CHANGE BY MAKING OWN STATE FOR EACH FLASHCARD I THINK WATCH THE OG VIDEO https://www.youtube.com/watch?v=2hR-uWjBAgw&t=2170s **
  const [Set, setSet] = useState([]);

  const setCollectionRef = collection(db, "Set");
  //UPDATE definition state
  const[updateDef, setUpdatedDef] = useState("");


  const getSet = async() => {
    //READ THE DATA
    //SET THE MOVIE LIST
    try{
      const data = await getDocs(setCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setSet(filteredData);
    } catch(err){
      console.error(err);
    }
    
};

  useEffect(() => {
    getSet();
}, []);

  //New Sets
  const [newTerm, setNewTerm] = useState("");
  const [newDefintion, setNewDefinition] = useState("");

  const onSumbitFlashCard = async () => {
    try{
      await addDoc(setCollectionRef, {Term: newTerm, Definition: newDefintion, AnsweredCorrect: 0, AnsweredIncorrect: 0, userId: auth?.currentUser?.uid});
      
      getSet();
    }catch(err){
      console.error(err);
    }
  }
  //DELETE FLASHCARD

  const deleteFlashCard = async (id) => {
    const FlashCard = doc(db, "Set", id ); //** NAME OF COLLECTION IS "Set" change later to change what database */
    await deleteDoc(FlashCard);
    getSet();
  };


  //UPDATE FLASHCARD
  const updateFlashCard = async (id) => {
    const FlashCard = doc(db, "Set", id ); //** NAME OF COLLECTION IS "Set" change later to change what database */
    await updateDoc(FlashCard, {Definition: updateDef});
    getSet();
  };
  return (

    <div className='wrapper-pages'>
      <Nav></Nav>
      <div className="CreateSets">

        <input placeholder="Term" onChange={(e) => setNewTerm(e.target.value)}/>
        <input placeholder="Definition" onChange={(e) => setNewDefinition(e.target.value)}/>
        <button onClick={onSumbitFlashCard}> Submit Flash Card</button>

      </div>
      <div className='Sets'>
        {Set.map((Set) =>(
          <div>
            <p> Term: {Set.Term} </p>
            <p> Definition: {Set.Definition} </p>
            <p> Correct: {Set.AnsweredCorrect} </p>
            <p> Incorrect: {Set.AnsweredIncorrect}</p>

            <p><button onClick={() => deleteFlashCard(Set.id)}> Delete FlashCard </button></p>

            <input placeholder="New Definition..." onChange={(e) => setUpdatedDef(e.target.value)}/>
            <button onClick={() => updateFlashCard(Set.id)}> Update Definition</button>
            </div>
        ))}

      </div>

    </div>
  )
}

export default Sets