import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/Register';
import Home from './Pages/Home/HomePage';
import Sets from './Pages/Sets/Sets';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/HomePage" element={<Home/>} />
          <Route path="/Sets" element={<Sets/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
