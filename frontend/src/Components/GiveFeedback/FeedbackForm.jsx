import React, { useState } from 'react';
import FeedbackNavbar from './FeedbackNavbar';
import './Feedbackform.css';
import CommonFooter from '../Footer/CommonFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formdata, setform] = useState({});

  const inputHandler = (e) => {
   
setform({...formdata,[e.target.name]:e.target.value});
  
    
  };

  const addData = (e) => {
    e.preventDefault();
    console.log('clicked', formdata);
// Calculate the final feedback
const finalFeedback = parseInt(formdata.question1) + parseInt(formdata.question2 )+parseInt( formdata.question3 )+ parseInt(formdata.question4);

// Include the final feedback in the form data
const formDataWithFinalFeedback = { ...formdata,finalFeedback };
   
    axios.post('http://localhost:3005/api/addfeedback', formDataWithFinalFeedback)
      .then((res) => {
        alert(res.data.Message);
        console.log(res.data);
        window.location.href = 'https://www.ictkerala.org';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <FeedbackNavbar />
      <div>
     

      {/* feedback form */}
        <div className="container feedbackform">
          <div className="row feedback">
            <div className="col col-xs-4 col-md-10 col-lg-12">
              <form onSubmit={addData}>
              <label style={{margin:"30px",color:"bisque"}}>Please Enter your completed course id:</label>
              <input onChange={inputHandler}  name="courseId"  required />
                <div className='questions'>
                  <label>The training course was relevant and helpful for me to relate.</label>
                  <input onChange={inputHandler} type="number" name="question1" min="1" max="5"  required />
                </div>
                <div className='questions'>
                  <label>Delivery of the content was clear and understandable.</label>
                  <input onChange={inputHandler} type="number" name="question2" min="1" max="5"  required />
                </div>
                <div className='questions'>
                  <label>I am confident in applying the learnings into practice.</label>
                  <input onChange={inputHandler} type="number" name="question3" min="1" max="5" required />
                </div>
                <div className='questions'>
                  <label>How would you rate the trainer?</label>
                  <input onChange={inputHandler} type="number" name="question4" min="1" max="5" required />
                </div>
                <div className='questions'>
                  <label>What did you enjoy the most about the training session?</label>
                  <textarea onChange={inputHandler} name="like" required/>
                </div>
                <div className='questions'>
                  <label>Any additional comments/suggestions</label>
                  <textarea onChange={inputHandler} className="answers" name="additionalComments" required/>
                </div>
                <div>
                  <button className='feedbackbutton' type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default FeedbackForm;
