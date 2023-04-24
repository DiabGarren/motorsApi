const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.getCars);

module.exports = router;