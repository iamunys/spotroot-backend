const PayoutModel = require('../model/payouts.model');
const UserModel = require('../model/user.model')
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(finderId, userName, fullName, placeName, phoneNumber) {
        try {
            const createUser = new UserModel({ finderId, userName, fullName, placeName, phoneNumber });
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

    static async checkfinder(finderId) {
        try {
            return await UserModel.findOne({ finderId });
        } catch (err) {
            throw err;
        }
    }

    static async getAllfinders(searchText) {
        try {
            let user = []
            if (searchText === 'null') {
                user = await UserModel.find({})

            } else {
                // const sortedPayouts = await PayoutModel.aggregate([
                //     {
                //         $addFields: {
                //             pendingPayout: { $toDouble: "$pendingPayout" } // Convert to number
                //         }
                //     },
                //     {
                //         $sort: { pendingPayout: -1 } // 1 for ascending, -1 for descending
                //     }
                // ]).exec();

                user = await UserModel.find({
                    $or: [
                        { userName: { $regex: searchText, $options: 'i' } },
                        { phoneNumber: { $regex: searchText, $options: 'i' } },

                    ]
                })

            }
            return user
        } catch (err) {
            throw err;
        }
    }


    static async generateToken(tokenData, secerentKey, jwtExpiry) {
        return jwt.sign(tokenData, secerentKey, { expiresIn: jwtExpiry });
    }


}


module.exports = UserService;