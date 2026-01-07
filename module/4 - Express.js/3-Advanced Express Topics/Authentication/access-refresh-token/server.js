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

// 🔄 Refresh
app.post('/refresh', (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign(
      { name: user.name, email: user.email },
      ACCESS_SECRET,
      { expiresIn: '15s' }
    );

    res.json({ 
        "message":"successfully",
        accessToken });
  });
});

// 🛡️ Profile
app.get('/profile', auth, (req, res) => {
  res.json({ user: req.user });
});

// 
function auth(req, res, next){

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    
    // No token
    if (!token) return res.status(401).json({
        sccess:false,
        message:'Access token missing. Please login again.'
    });

    jwt.sign(token, ACCESS_SECRET, (err, user)=>{
        if(err){
            return res.status(403).json({
                success:false,
                message: 'Invalid or expired access token.'
            });
        }

        req.user = user;
        next();
    });
} 


app.listen(3000, () =>
  console.log('Backend running on http://localhost:3000')
);