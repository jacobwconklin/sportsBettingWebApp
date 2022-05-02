const express = require('express');
const router = express.Router();
const betController = require('../controllers/bet.controller');


router.post('/addbet', betController.addBet);
router.post('/postresult', betController.postResult);
router.get('/getbetsofuser', betController.getBetsOfUser);

module.exports = router;
