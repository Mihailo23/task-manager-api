const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'admin@mihailopantovic.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know how it works for you`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'admin@mihailopantovic.com',
    subject: 'Goodbye',
    text: `Goodbye ${name}, we're sad to see you go!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}