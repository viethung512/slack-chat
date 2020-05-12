const express = require('express');
const router = express.Router();

const { signIn, register } = require('../controllers/auth.controller');
const {
  validateSignIn,
  validateRegister,
} = require('../middleware/auth.middleware');

router.post('/login', validateSignIn, signIn);
router.post('/register', validateRegister, register);

module.exports = router;
