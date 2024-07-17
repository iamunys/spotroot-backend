const express = require('express');
const UserController = require('../controller/user.controller');
const AdminController = require('../controller/admin.controller');

const SpotController = require('../controller/spot.controller');
const PayoutController = require('../controller/payouts.controller');
const { verifyToken } = require('../middleWare/authentication');


const router = express.Router();

//admin Apis
router.post('/login', AdminController.login);
router.patch('/update/:paidAmount/:finderId', AdminController.updateAmt);
router.get('/getUsersAdmin/:searchText', verifyToken, UserController.getUsers);
router.get('/getUserEarnAdmin/:finderId', verifyToken, PayoutController.getEarningAdmin);
router.get('/getSpotsAdmin/:finderId/:status', verifyToken, SpotController.getSpots);
router.patch('/updateSpotsStatus/:spotId/:status', verifyToken, SpotController.updateSpotsStatus);

module.exports = router;
