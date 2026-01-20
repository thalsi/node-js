const express = require('express');
const router = express.Router();
const UserEmbedding = require('../models/embedding/embedding');

const User = require('../models/referencing/one-to-one/user.model');
const Profile = require('../models/referencing/one-to-one/profile.model');

// 👉 CREATE
router.post('/user-embedding', async (req, res)=>{
    const user= await UserEmbedding.create(req.body);
    res.status(201).json({
        message:'Create successfully',
        status:true,
        response:user
    });
});

// 👉 READ ALL
router.get('/user-embedding', async (req, res)=>{
    const users= await UserEmbedding.find();
    res.status(201).json(users);
});

// 👉 READ 
router.get('/user-embedding/:id', async (req, res)=>{
    const user= await UserEmbedding.findById(req.params.id);
    res.status(201).json(user);
});


// Referening One to One

// 👉 PROFILE-CREATE
router.post('/profile-referening', async (req, res)=>{
    const profile= await Profile.create(req.body);
    res.status(201).json({
        message:'Prfile create successfully',
        status:true,
        response:profile
    });
});

// 👉 PROFILE-READ 
router.get('/profile-referening', async (req, res)=>{
    const profile= await Profile.find();
    res.status(201).json(profile);
});

// 👉 USER-CREATE
router.post('/user-referening', async (req, res)=>{
    const user= await User.create(req.body);
    res.status(201).json({
        message:'User create successfully',
        status:true,
        response:user
    });
});

// 👉 USER-READ 
router.get('/user-referening', async (req, res)=>{
    const users= await User.find().populate('profile');
    res.status(201).json(users);
});


module.exports=router;