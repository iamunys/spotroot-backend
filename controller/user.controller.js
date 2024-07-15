const UserService = require('../services/user.service');
const PayoutService = require('../services/payouts.service');


exports.register = async (req, res, next) => {
    try {
        let date_time = new Date();
        let date = ("0" + date_time.getDate()).slice(-2);
        let year = date_time.getFullYear();
        let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

        const { finderId, userName, fullName, placeName, phoneNumber } = req.body;
        await UserService.registerUser(finderId, userName, fullName, placeName, phoneNumber);
        await PayoutService.createPassbook(finderId, '0', '0', '0', year + "-" + month + "-" + date);
        res.status(201).json({ status: true, success: 'User Registered Successfully' });
    } catch (error) {
        throw error;
    }

}

exports.login = async (req, res, next) => {
    const { finderId } = req.body;
    try {
        const finderResponse = await UserService.checkfinder(finderId);
        console.log('this is the finder $finder:' + finderResponse);
let tokenData ={finderResponse};
const token = await UserService.generateToken(tokenData,'jwtKey','14d');
        res.status(201).json({ status: true, token: token });
    } catch (error) {
        throw error;
    }

}
exports.checkUsername = async (req, res, next) => {
    try {
        const { userName } = req.body;
        const user = await UserService.checkUserName(userName);
        if (user) {
            res.status(204).json({ status: false, success: 'Username already taken' });
        } else {
            res.status(201).json({ status: true, success: 'Username Available' });
        }
    } catch (error) {
        throw error;
    }
}