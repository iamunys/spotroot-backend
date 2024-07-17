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
        next(error)
        // throw error;
    }

}

exports.login = async (req, res, next) => {
    const { finderId } = req.body;
    try {
        const finderResponse = await UserService.checkfinder(finderId);
        console.log('This is the finder:' + finderResponse);
        if(!finderResponse) res.status(201).json({ status: true, message: 'User not registered' });
        let tokenData = { finderResponse };
                const token = await UserService.generateToken(tokenData, process.env.SECRET_KEY, '2d');
        res.status(201).json({ status: true, token: token });
    } catch (error) {
        // throw error;
        next(error)

    }

}
exports.checkUsername = async (req, res, next) => {
    try {
        const { userName } = req.params;
        const user = await UserService.checkUserName(userName);

        if (user) {
            res.status(200).json({ status: false, success: 'Username already taken' });    
            } else {
            res.status(200).json({ status: true, success: 'Username Available' });    
        }
    } catch (error) {
        next(error)

    }
}

exports.getUsers = async (req, res, next) => {
    try {
        const { searchText } = req.params;
        const users = await UserService.getAllfinders(searchText);

        res.status(200).json({ status: true,  users });
    } catch (error) {
        next(error)

    }
}