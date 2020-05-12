const router = require('express').Router();
const authRoute = require('./auth.routes');

router.use('/auth', authRoute);

module.exports = router;
