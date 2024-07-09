
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Components/Home/Login';
import FeedbackForm from './Components/GiveFeedback/FeedbackForm';
import TrainingCoordinator from './Components/Trainingcoordinator/TrainingCoordinator';
import AddnewCourse from './Components/Trainingcoordinator/AddnewCourse';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/feedback' element={ <FeedbackForm/>}/>
        <Route path='/training' element={ <TrainingCoordinator/>}/>
        <Route path='/addcourse' element={ <AddnewCourse  method="post" data={{courseId:'',courseName:'',ou:'',typeOfTraining:'',startDate:'',endDate:'',batchCount:'',trainerName:'',status:''}}/>}/>
   </Routes>
    </div>
  );
}

export default App;
