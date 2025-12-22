const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.post('/login', (req,res)=>{
    const user={id: 1, name:'Admin'};

    const token=jwt.sign(user, 'SECRET_KEY',{
        expiresIn:'1h'
    });

    res.json({token});

});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});