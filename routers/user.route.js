const router = require('express').Router();
const UserController = require('../controller/user.controller');
const SpotController = require('../controller/spot.controller');


router.post('/registration',UserController.register);
router.post('/checkUsername',UserController.checkUsername);
router.post('/createSpot',SpotController.createSpots);
router.post('/getSpots',SpotController.getSpots);




module.exports = router;