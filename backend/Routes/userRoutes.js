
const express=require('express');
const router=express.Router();
router.use(express.json());
const user=require('../Model/user')


router.post('/login',async(req,res)=>{

    let email=req.body.email;
    let password=req.body.password;
    let loginuser= await user.findOne({email:email});
    if(!loginuser)
    {
        return res.status(404).send({Message:"Email not found"});
    }
    try {
        if(loginuser.password===password){
            return res.status(200).send({Message:'login successful',role:loginuser.role});
        }
        else{
            return res.status(500).send({Message:"password not valid"});
        }
        
    } catch (error) {
        res.status(404).send({Message:"No user Found"});
    }
})
module.exports=router;


// const express=require('express');
// const router=express.Router();
// const jwt=require('jsonwebtoken');
// router.use(express.json());




// // route for login



// router.post('/login',async(req,res)=>{
//     let username= req.body.username;
//     let password =req.body.password;

//     const user = await users.findOne({username:username});
//     if(!user){
//         res.json({message:"User not found"});
//     }
//     try {
//        if(user.password== password) {
//         // send the tokento the frontend
//         let payload={user:username,pwd:password};
//         let token=jwt.sign(payload,'reactblogapp');
//         res.send({message:'login successful',token:token});
//         // res.json({message:"login successful",user})
//        }
//        else{
//         res.json({message:"Login failed"})
//        }
//     } catch (error) {
//         console.log(error)
//     }
// })


// module.exports=router;