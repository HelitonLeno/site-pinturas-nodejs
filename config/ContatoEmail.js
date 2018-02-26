const nodemailer = require('nodemailer');

module.exports = function (msg) {
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
            /*console.log('Message sent: %s', info.messageId);console/!*
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));*!/*/
        });
    });
};