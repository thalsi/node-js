const express=require('express');
const router=express.Router();
const upload = require('./upload'); 

router.post('/upload', upload.single('image'), (req, res) => {
  res.json({
    message: 'File uploaded successfully',
    file: req.file
  });
});


router.post(
  '/profile',
  upload.single('photo'),
  (req, res) => {

    const { name, email } = req.body;

    res.json({
      name,
      email,
      photo: req.file.filename
    });
});


module.exports = router;

