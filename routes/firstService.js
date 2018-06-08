const express = require('express');
const router = express.Router({ mergeParams: true });
const firstServiceController = require('../controllers/firstServiceController');
router.get('/firstService', firstServiceController.firstService);
module.exports = router;