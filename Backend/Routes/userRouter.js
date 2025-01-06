const express = require('express')
const router = express.Router();
const User = require('../Models/User.js')
router.post('/SignUp',async (req,res)=>
{
    const {name, email, pwd}=req.body;
    try{
     var newUser = new User({
        name:name,
        email:email,
        password:pwd
     });
     await newUser.save();
     console.log("success");
     res.status(201).json({message:"success login"});
    }catch(err)
    {
        console.err("Error",err);
    }
});
module.exports = router;
