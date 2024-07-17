
const AdminModel = require('../model/admin.model')
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

class AdminService {
    static async adminLogin(userName, password) {
        try {
            const adminCount = await AdminModel.countDocuments({});
            if (adminCount === 0) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const createAdmin = new AdminModel({ userName, password: hashedPassword });
                return await createAdmin.save();
            } else {
                const admin =await AdminModel.findOne({ userName })
                if (admin) {
                    const isMatch = await bcrypt.compare(password, admin.password);
                    if (isMatch) {
                        return admin;
                    } else {
                        throw new Error('Invalid password');
                    }

                } else {
                    throw new Error('Admin not found');
                }
            }

        } catch (err) {
            throw err;
        }
    }




}


module.exports = AdminService;
