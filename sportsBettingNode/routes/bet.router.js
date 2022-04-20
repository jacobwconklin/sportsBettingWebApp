const express = require('express');
const router = express.Router();
const betController = require('../controllers/bet.controller'); // REPLACE!!!!!!!!!!
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');


router.post('/addbet', betController.addBet);
router.get('/getbetsofuser', betController.getBetsOfUser);

module.exports = router;
