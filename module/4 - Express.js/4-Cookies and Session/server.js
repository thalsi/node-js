const express= require('express');
const session=require('express-session');

const app = express();

app.use(express.json());
app.use(session({
    secret:'my_secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true
    }
}));


// login
app.post('/login',(req, res)=>{
    req.session.user={
        id:1,
        name:'Test User'
    }

    res.json({
        success:true,
        message:'Login successfully'
    })
})

app.get('/profile', (req, res)=>{
    if(!req.session.user){
        res.status(401).json({
            success:false,
            message:'Session is invalid or not avalible.'
        });
    }

    res.json({
        message:'successfully',
        session:req.session.user
    });
});

app.post('/logout',(req,res)=>{
    req.session.destroy();
    res.json({
        message:"Logout successfully"
    })
});

app.listen(3000, ()=>{
    console.log('Server is runing...');
})