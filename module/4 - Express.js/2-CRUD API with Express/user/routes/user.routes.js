const express=require('express');
const router=express.Router();

const userController= require('../controllers/user.controller');


router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);

router.get('/error', (req, res) => {
  throw new Error('Test error');
});

router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;