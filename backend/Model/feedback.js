const mongoose=require('mongoose');

// create schema
const feedbackSchema = mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    question1: Number,
    question2: Number,
    question3: Number,
    question4: Number,
    additionalComments: String,
    finalFeedback: Number,
  });

// map to collection

const feedbackModel=mongoose.model('feedback',feedbackSchema);
module.exports=feedbackModel;
