const functions = require('firebase-functions');

const express = require('express');
const app = express();
const cors = require('cors');
// const { admin } = require('./utils/admin');
// const firebaseConfig = require('./utils/firebaseConfig');

// admin.initializeApp();

const route = require('./routes/index');

app.use(cors());
app.use(express.json({ extended: false }));
app.use(route);

exports.api = functions.region('asia-northeast1').https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
