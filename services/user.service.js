const UserModel = require('../model/user.model')

class UserService {
    static async registerUser(userName, fullName, placeName, phoneNumber) {
        try {
            const createUser = new UserModel({ userName, fullName, placeName, phoneNumber });
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }

    static async checkUserName(userName) {
        try {
            return await UserModel.findOne({ userName });
        } catch (err) {
            throw err;
        }
    }


}


module.exports = UserService;