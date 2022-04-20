var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');


router.post('/authenticate', userController.authenticate);
router.post('/register', userController.register);
router.get('/allusers', userController.getAllUsers);
//TODO: add the needed routing for setting and getting user goal values. Hint: '/getgoals/:username' Hint2: '/setgoals'
router.post('/setgoals/:username', userController.setgoals);
router.get('/getgoals', userController.getgoals);
//router.get('/getAllRecordsOfUser', userController.getAllRecordsOfUser);

module.exports = router;
