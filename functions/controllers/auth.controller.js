const firebase = require('firebase');
const { validationResult } = require('express-validator');
const { db } = require('../utils/admin');
const firebaseConfig = require('../utils/firebaseConfig');

firebase.initializeApp(firebaseConfig);

const signIn = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() });
  }

  const { email, password } = req.body;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => data.user.getIdToken())
    .then(token => res.json({ token }))
    .catch(err => {
      console.error(err.code);
      return res.status(403).json({
        errors: {
          general: { msg: 'Wrong credential, please try again' },
        },
      });
    });
};

const register = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() });
  }

  const { username, email, password } = req.body;
  let token, userId;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        email: email,
        displayName: username,
        createdAt: Date.now(),
      };

      return db.doc(`/users/${userId}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.log(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({
          errors: {
            general: { msg: 'Email is already used' },
          },
        });
      }

      return res.status(500).json({
        errors: {
          general: { msg: 'Some thing went wrong, please try again' },
        },
      });
    });
};

module.exports = { signIn, register };
