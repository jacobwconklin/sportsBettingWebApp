const express = require('express');
const router = express.Router();
const betController = require('../controllers/bet.controller');


router.get('/getbetsofuser', betController.getBetsOfUser);

module.exports = router;
