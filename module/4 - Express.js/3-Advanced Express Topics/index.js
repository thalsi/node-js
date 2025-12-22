const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.get('/users/:id/setting/:setId',(req, res)=>{
  const {id, setId}=req.params;
  res.send(`User Id:${id} -- setting: ${setId}`);
})

app.get('/items',(req, res)=>{
const {category, size}=req.query;
res.json({category, size});
});

app.listen(3000);
