const express = require('express');
const router = express.Router();
const resultController = require('../controllers/result.controller');


router.get('/getresult', resultController.getResult);

module.exports = router;
