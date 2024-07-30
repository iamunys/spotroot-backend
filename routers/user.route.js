const express = require('express');
const UserController = require('../controller/user.controller');
const SpotController = require('../controller/spot.controller');
const PayoutController = require('../controller/payouts.controller');
const { verifyToken } = require('../middleWare/authentication');


const router = express.Router();


router.post('/registration',UserController.register);
router.post('/login',UserController.login);
router.get('/checkUsername/:userName',UserController.checkUsername);
router.post('/createSpot',verifyToken,SpotController.createSpots);
router.get('/getSpots/:finderId/:status',verifyToken,SpotController.getSpots);
router.patch('/getEarnings',verifyToken,PayoutController.getEarnings);
router.patch('/updateSpot', verifyToken, SpotController.editSpots);

router.get('/getPlaces/:query', verifyToken, SpotController.getPlaces);
router.get('/getPlacesDetails/:placeId',verifyToken,SpotController.getPlacesDetails);




module.exports = router;