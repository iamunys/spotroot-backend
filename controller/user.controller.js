const UserService = require('../services/user.service');

exports.register = async (req, res, next) => {
    try {
        const { userName, fullName, placeName, phoneNumber } = req.body;
        const successRes = await UserService.registerUser(userName, fullName, placeName, phoneNumber);

        res.status(201).json({ status: true, success: 'User Registered Successfully' });
    } catch (error) {
        throw error;
    }

}
exports.checkUsername = async (req, res, next) => {
    try {
        const { userName } = req.body;
        const user = await UserService.checkUserName(userName);
        console.log('----------user-----------', user);
        if (user) {
            res.status(204).json({ status: false, success: 'Username already taken' });

        }else{
            res.status(201).json({ status: true, success: 'Username Available' });

        }


    } catch (error) {
        throw error;
    }

    
}