const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET = 'mysecretkey';


app.use(express.json());

app.post('/login', (req, res) => {
    console.log(req.body); 
  const { email, password } = req.body;


  if (email === 'test@gmail.com' && password === '1234') {
    const token = jwt.sign(
      { email: email },
      SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid login' });
  }
});


function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'Token required' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
}


// PROTECTED API
app.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Welcome',
    user: req.user
  });
});
app.listen(3000, () => {
  console.log('Server running on port 3000');
});