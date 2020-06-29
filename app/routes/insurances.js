const router = require('express').Router();
const insuranceController = require('../controllers/insurances.js');

router.post('/risk/status', insuranceController.riskStatus);

module.exports = router;
