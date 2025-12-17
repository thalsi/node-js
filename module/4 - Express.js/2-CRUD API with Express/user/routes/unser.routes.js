const express=require('express');
const router=express.Router();

const UserController= require('../controllers/unser.controller');

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);


module.exports = router;