var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/token' , function(req , res , next){
  fs.appendFile("temp.txt", `${req.body.token}\n`, (err) => {
    if (err) console.log(err);
    res.json({status: true , token:req.body.token});
  });
})

module.exports = router;
