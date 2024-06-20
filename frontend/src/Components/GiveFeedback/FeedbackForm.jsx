import React from 'react'

const FeedbackForm = () => {
  return (
    <div>

<div className="container feedbackform">
    <div className="row feedback">
        <div className="col col-xs-4 col-md-10 col-lg-12">

        <div>
        <label> The training course was relevant and helpful for me to relate. </label>
        <input type="number" name="question1"  min="1" max="5" required />
      </div>
      <div>
        <label> Delivery of the content was clear and understandable. </label>
        <input type="number" name="question2"  min="1" max="5" required />
      </div>
      <div>
        <label> I am confident in applying the learnings into practice. </label>
        <input type="number" name="question3" min="1" max="5" required />
      </div>
      <div>
        <label> How would you rate the trainer? </label>
        <input type="number" name="question4"  min="1" max="5" required />
      </div>
      <div>
        <label> What did you enjoy the most about the training session? </label>
        <textarea name="additionalComments" />
      </div>
      <button type="submit">Submit</button>


        </div>



    </div>



</div>



    </div>
  )
}

export default FeedbackForm