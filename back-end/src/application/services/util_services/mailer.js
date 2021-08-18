const nodemailer = require('nodemailer');

module.exports = (options) => {
    const tranport = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        to: options.email,
        subject: options.subject,
        html: options.template,
    };

    return tranport.sendMail(mailOptions).then((info) => { return { err: false, message: info } }).catch((err) => { return { err: true, message: err.message } });
};