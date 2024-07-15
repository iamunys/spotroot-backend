const express = require('express');
const UserController = require('../controller/user.controller');
const SpotController = require('../controller/spot.controller');
const PayoutController = require('../controller/payouts.controller');
const UserService = require('../services/user.service');


const router = express.Router();


router.post('/registration',UserController.register);
router.post('/login',UserController.login);
router.post('/checkUsername',UserController.checkUsername);
router.post('/createSpot',UserService.verifyToken,SpotController.createSpots);
router.post('/getSpots',UserService.verifyToken,SpotController.getSpots);
router.patch('/getEarnings',UserService.verifyToken,PayoutController.getEarnings);





module.exports = router;