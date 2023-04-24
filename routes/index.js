const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.getData);

module.exports = router;