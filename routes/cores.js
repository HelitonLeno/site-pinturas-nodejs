const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('cores', {
        title: 'Utopia | Pinturas - Paleta de Cores | Pintor Maringá',
        titleH1: 'Utopia Pinturas'
    });
});

router.post('/send', (req, res) => {
    let msg = `<p>Nome: ${req.body.name} </p>
           <p>Email: ${req.body.email}</p>
           <p>Assunto: ${req.body.subject}</p>
           <p>Mensagem: ${req.body.message}</p>
          `;
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.umbler.com',
            port: 587,
            secure: false,
            auth: {
                user: 'contato@utopiapinturas.com.br',
                pass: 'Heliton1825'
            }
        });

        let mailOptions = {
            from: '"Utopia Pinturas" <contato@utopiapinturas.com.br>',
            to: 'ciencia_@live.com',
            subject: 'Alguem entrou em contato',
            text: 'detalhes',
            html: msg
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });

});

module.exports = router;