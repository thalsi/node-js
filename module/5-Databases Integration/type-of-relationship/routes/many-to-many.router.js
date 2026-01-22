const express=require('express');
const router=express.Router();

const course=require('../models/referencing/many-to-many/course.model');
const sutdent=require('../models/referencing/many-to-many/student.model');

// CREATE (Course)
router.post('/many-to-many/course', async(req, res)=>{
    const body= await course.create(req.body);
    
    res.status(201).json({
        message:'Create coures successfully',
        res:body
    })   
});

// CREATE (sutdent)
router.post('/many-to-many/sutdent', async(req, res)=>{
    const body= await sutdent.create(req.body);
    
    res.status(201).json({
        message:'Create sutdent successfully',
        res:body
    })   
});

// 👉 USER-READ 
router.get('/many-to-many/course', async (req, res)=>{
    const body= await course.find();
    res.status(201).json(body);
});

// 👉 USER-READ 
router.get('/many-to-many/sutdent', async (req, res)=>{
    const body= await sutdent.find();
    res.status(201).json(body);
});


module.exports=router;