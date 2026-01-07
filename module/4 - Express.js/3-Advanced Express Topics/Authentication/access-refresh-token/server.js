const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));

const ACCESS_SECRET = 'access_secret';
const REFRESH_SECRET = 'refresh_secret';

// Fake DB user
const USER = {
  email: 'test@gmail.com',
  password: '123456',
  name: 'Test User'
};

// 🔐 Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email != USER.email || password != USER.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const payload = { name: USER.name, email: USER.email };

  const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15s' });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' });

  res.cookie('refreshToken', refreshToken, { httpOnly: true });
  res.json({ accessToken });
});


app.listen(3000, () =>
  console.log('Backend running on http://localhost:3000')
);