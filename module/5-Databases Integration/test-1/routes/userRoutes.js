const express = require('express');
const User = require('../models/user');

const router = express.Router();


// 👉 CREATE
router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});


// 👉 READ ALL
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// 👉 READ ONE
router.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});


// 👉 UPDATE
router.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});


// 👉 DELETE
router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
