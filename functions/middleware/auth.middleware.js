const { check } = require('express-validator');
const { admin, db } = require('../utils/admin');

const fbAuth = (req, res, next) => {
  let idToken;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    console.error('No token found');
    return res.status(403).json({
      errors: {
        general: { msg: 'Unauthorized' },
      },
    });
  }

  return admin
    .auth()
    .verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken;

      return db.doc(`/users/${req.user.uid}`).get();
    })
    .then(doc => {
      req.user.displayName = doc.data().displayName;
      req.user.avatarUrl = doc.data().avatarUrl;
      return next();
    })
    .catch(err => {
      console.error('Error while verifying token', err);
      return res.status(403).json({
        errors: {
          general: { msg: err },
        },
      });
    });
};

module.exports = {
  fbAuth,
  validateSignIn: [
    check('email')
      .exists()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Email is not valid'),
    check('password').exists().withMessage('Password is required'),
  ],
  validateRegister: [
    check('username').exists().withMessage('Username is required'),
    check('email')
      .exists()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Email is not valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Please enter password with 6 or more character'),
    check('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password does not match');
      } else {
        return true;
      }
    }),
  ],
};
