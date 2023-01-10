// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from "@sendgrid/mail";

export default ({ to, from, subject, text, html }: {[key:string]: string}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const msg = {
    to,
    from: from || process.env.FROM_EMAIL as string,
    subject,
    text,
    html,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    });
}


// sendgrid({
//   to: 'jideajayi11@gmail.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// });
