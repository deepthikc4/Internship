const express=require('express');
const router=express.Router();

const feedback=require('../Model/feedback');
router.use(express.json());


// to enter feedback form


router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        let newUser=await users(data).save();
        console.log(newUser);
        res.status(200).send(`data added`);
    } catch (error) {
        console.log(error);
    }
})








module.exports=router;