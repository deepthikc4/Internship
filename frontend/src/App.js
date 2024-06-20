
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import HomePage from './Pages/HomePage';
import Login from './Components/Home/Login';
import FeedbackForm from './Components/GiveFeedback/FeedbackForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/feedback' element={ <FeedbackForm/>}/>
  
   </Routes>
    </div>
  );
}

export default App;
