// import * as functions from 'firebase-functions';

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');
// const cors = require('cors')({origin: true});
// admin.initializeApp();

// /**
// * Here we're using Gmail to send 
// */
// let transporter = nodemailer.createTransport({
//     service: import * as functions from 'firebase-functions';

// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');
// const cors = require('cors')({origin: true});
// admin.initializeApp();

// /**
// * Here we're using Gmail to send 
// */
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'info@radii.in',
//         pass: '******'
//     }
// });

// exports.sendMail = functions.https.onRequest((req, res) => {
//     cors(req, res, async () => {
      
//         // getting dest email by query string
//         const dest = req.query.dest;

//         const mailOptions = {
//             from: 'Radii Directorate <info@radii.in>', // Something like: Jane Doe <janedoe@gmail.com>
//             to: dest,
//             subject: 'I\'M A PICKLE!!!', // email subject
//             html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
//                 <br />
//                 <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
//             ` // email content in HTML
//         };
  
//         // returning result
//         let info = await transporter.sendMail(mailOptions);
//         console.log("Message sent: %s", info.messageId);
//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//     }).catch(console.error);    
// });

//'gmail',
//     auth: {
//         user: 'info@radii.in',
//         pass: '******'
//     }
// });

// exports.sendMail = functions.https.onRequest((req, res) => {
//     cors(req, res, async () => {
      
//         // getting dest email by query string
//         const dest = req.query.dest;

//         const mailOptions = {
//             from: 'Radii Directorate <info@radii.in>', // Something like: Jane Doe <janedoe@gmail.com>
//             to: dest,
//             subject: 'I\'M A PICKLE!!!', // email subject
//             html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
//                 <br />
//                 <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
//             ` // email content in HTML
//         };
  
//         // returning result
//         let info = await transporter.sendMail(mailOptions);
//         console.log("Message sent: %s", info.messageId);
//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//     }).catch(console.error);    
// });

