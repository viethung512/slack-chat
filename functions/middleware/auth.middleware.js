const { check } = require('express-validator');

const fbAuth = (req, res, next) => {};

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
