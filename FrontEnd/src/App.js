import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/Register';
import Home from './Pages/Home/HomePage';
import Sets from './Pages/Sets/Sets';
import Explore from './Pages/Explore/Explore';
import Account from './Pages/Account/Account';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/HomePage" element={<Home/>} />
          <Route path="/Sets" element={<Sets/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/Account" element={<Account/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

/* NOTES FOR FUTURE IDEAS:
1. Make transition between login page where the box widens and then go to the home page 
*/


export default App;
