var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Ton&Leno | Pinturas',
    titleH1:'Ton&Leno' 
  });
});

module.exports = router;
