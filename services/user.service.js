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


    static async generateToken(tokenData, secerentKey, jwtExpiry) {
        return jwt.sign(tokenData, secerentKey, { expiresIn: jwtExpiry });
    }

    static async verifyToken(req,res,next){

        let authHeader = req.headers.authorization;
        if(authHeader==undefined){
            res.status(401).send({error:'Not authorized'})
        }else{
            console.log(authHeader);
            let token = authHeader.split(" ")[1];
            jwt.verify(token,'jwtKey',function(err,decoded){
                if(err){
                    res.status(500).send({error:'Authentication Failed'})
                }else{
                   next();
                }
            })
        }
     

    }


}


module.exports = UserService;