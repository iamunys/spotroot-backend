const PayoutModel = require("../model/payouts.model");
const UserModel = require("../model/user.model");
const AdminService = require("../services/admin.service");
const jwt = require('jsonwebtoken');



exports.login = async (req, res, next) => {
    try {
        const response = await AdminService.adminLogin(req.body.userName, req.body.password);
        const { userName, password, _id } = response
        const token = jwt.sign({ userName, password, _id }, process.env.SECRET_KEY, { expiresIn: '14d' });

        res.status(201).json({ status: true, token: token });
    } catch (error) {
        next(error)

    }

}

exports.updateAmt = async (req, res, next) => {
    try {
        const { paidAmount, finderId } = req.params
        const payouts = await PayoutModel.findOne({ finderId })

        payouts.paidPayout = (parseFloat(payouts.paidPayout) + parseFloat(paidAmount))
        payouts.pendingPayout = (parseFloat(payouts.pendingPayout) - parseFloat(paidAmount))

        payouts.save()

        res.status(200).json({ status: true, message: 'updated successfully' });


    } catch (error) {
        next(error)
    }
}