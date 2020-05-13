const functions = require('firebase-functions');

const express = require('express');
const app = express();
const cors = require('cors');

const route = require('./routes/index');

app.use(cors());
app.use(express.json({ extended: false }));
app.use(route);

exports.api = functions.region('asia-northeast1').https.onRequest(app);
