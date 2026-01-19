const express = require('express');
const router = express.Router();
const User = require('../models/user');

// 👉 CREATE
router.post('/user', async (req, res)=>{
    const user= await User.create(req.body);
    res.status(201).json({
        message:'Create successfully',
        status:true,
        response:user
    });
});

// 👉 READ ALL
router.get('/user', async (req, res)=>{
    const users= await User.find();
    res.status(201).json(users);
});

// 👉 READ 
router.get('/user/:id', async (req, res)=>{
    const user= await User.findById(req.params.id);
    res.status(201).json(user);
});


module.exports=router;