const express=require('express');
const router=express.Router();

const feedback=require('../Model/feedback');
const course=require('../Model/course');
router.use(express.json());


// to enter feedback form


router.post('/addfeedback',async(req,res)=>{
    try {
        const data=req.body;
        let newfeedback=await feedback(data).save();
        console.log(newfeedback);
        if(newfeedback)
            {
            
            res.status(200).send({Message:'‘Thank you for your valuable feedback.'})
         }
    } catch (error) {
        res.status(400).send({Message:'failed'})
    }
})


// calculation final feedback score and update in to coursedb

router.get('/update-final-feedback', async (req, res) => {
    try {
      const completedCourses = await course.find({ status: 'Completed' });
      console.log(completedCourses);
      for (const c of completedCourses) {
        const feedbacks = await feedback.find({ courseId:c.courseId });
  console.log(feedbacks);
        if (feedbacks.length > 0) {
          const totalFinalFeedback = feedbacks.reduce((acc, feedback) => acc + feedback.finalFeedback, 0);
          console.log(totalFinalFeedback);
          const averageFinalFeedback = totalFinalFeedback / feedbacks.length;
          console.log(averageFinalFeedback);
       
        if (!isNaN(averageFinalFeedback)) {
            c.finalFeedback = averageFinalFeedback;
            await c.save();
          }
        }
      }
  
      res.status(200).send({Message:'Final feedback scores updated successfully.'});
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // API route to get completed courses with final feedback

router.get('/completedCourse',async(req,res)=>{

    try {
        const completed= await course.find({status:'Completed'});
if(completed.length==0)
{
    res.status(404).send({Message:"no completed course Found"});
}
res.status(200).send(completed)
    } catch (error) {
        res.status(500).send(error);
    }


})









module.exports=router;