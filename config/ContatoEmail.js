const nodemailer = require('nodemailer');

module.exports = function (msg) {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });

        let mailOptions = {
            from: '"Utopia Pinturas" <' + process.env.EMAIL + '>',
            to: process.env.MYEMAIL,
            subject: 'Alguém entrou em contato',
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