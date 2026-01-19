const express = require('express');
const router = express.Router();
const UserEmbedding = require('../models/embedding');

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


module.exports=router;