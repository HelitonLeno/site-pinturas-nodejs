const express = require('express');
const router = express.Router();
const enviarEmail = require('../config/ContatoEmail');


router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Utopia | Pinturas - Pintor Maringá | Pinturas Maringá ',
        titleH1: 'Utopia Pinturas'
    });
});

router.post('/send', (req, res) => {
    let msg = `<p>Nome: ${req.body.name} </p>
           <p>Email: ${req.body.email}</p>
           <p>Assunto: ${req.body.subject}</p>
           <p>Mensagem: ${req.body.message}</p>
          `;

    enviarEmail(msg);

});

module.exports = router;