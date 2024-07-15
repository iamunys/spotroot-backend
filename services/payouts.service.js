const SpotModel = require('../model/spot.model')
const PayoutModel = require('../model/payouts.model');
const { find } = require('../model/user.model');
const { get } = require('mongoose');



class PayoutService {

    static async createPassbook(finderId, totalPayout, paidPayout, pendingPayout, nextPayoutDate) {
        try {
            const createPassbook = new PayoutModel({ finderId, totalPayout, paidPayout, pendingPayout, nextPayoutDate });
            return await createPassbook.save();
        } catch (err) {
            throw err;
        }
    }

    static async updatePassbook(finderId, totalPayout, pendingPayout, nextPayoutDate) {
        try {
            const getPayouts = await PayoutModel.find({ finderId });
            pendingPayout = parseInt(totalPayout) - parseInt(getPayouts[0].paidPayout);
             await PayoutModel.updateMany({ finderId }, { finderId, totalPayout, pendingPayout, nextPayoutDate });
             return PayoutModel.find({finderId});
        } catch (err) {
            throw err;
        }
    }

}

module.exports = PayoutService;