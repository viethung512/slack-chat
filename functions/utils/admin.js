const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://slack-chat-23582.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db };
