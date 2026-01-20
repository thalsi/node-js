const express = require('express');
const router= express.Router();

const User = require('../models/referencing/One-to-Many/user.model');
const Post = require('../models/referencing/One-to-Many/post.model');

// 👉 USER-CREATE
router.post('/one-to-many/user', async (req, res)=>{
    const user= await User.create(req.body);
    res.status(201).json({
        message:'User create successfully',
        response:user
    });
});

// 👉 USER-READ 
router.get('/one-to-many/user', async (req, res)=>{
    const users= await User.find();
    res.status(201).json(users);
});

// 👉 USER-CREATE
router.post('/one-to-many/post', async (req, res)=>{
    const post= await Post.create(req.body);
    res.status(201).json({
        message:'Post create successfully',
        response:post
    });
});

// 👉 USER-READ 
router.get('/one-to-many/post', async (req, res)=>{
    const posts= await Post.find().populate('user');
    res.status(201).json(posts);
});

module.exports=router;