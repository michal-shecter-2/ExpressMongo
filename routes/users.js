const express = require('express');
const router = express.Router();
const arr=["aa","bb","cc"];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',(req,res,next)=>{
  const name=req.body.name;
   console.log(req.body.name)
   res.send(`hi ${name} nice to meet you`)
});
router.post('/arr',(req,res,next)=>{
  arr.push(req.body.arr)
res.send(arr)});

router.delete('/arrd',(req,res,next)=>{
  arr.slice(req.body.arr)
  res.send(arr)
});


module.exports = router;
