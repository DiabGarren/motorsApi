const router = require('express').Router();

router.get('/', require('./cars'));

module.exports = router;