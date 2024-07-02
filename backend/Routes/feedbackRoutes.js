const express=require('express');
const router=express.Router();

const feedback=require('../Model/feedback');
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









module.exports=router;