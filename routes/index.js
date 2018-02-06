var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Utopia | Pinturas - Internas e Externas',
    titleH1:'Utopia Pinturas' 
  });
});

module.exports = router;
