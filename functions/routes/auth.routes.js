const express = require('express');
const router = express.Router();

const {
  signIn,
  register,
  getAuthUser,
} = require('../controllers/auth.controller');
const {
  fbAuth,
  validateSignIn,
  validateRegister,
} = require('../middleware/auth.middleware');

router.get('/', fbAuth, getAuthUser);
router.post('/login', validateSignIn, signIn);
router.post('/register', validateRegister, register);

module.exports = router;
