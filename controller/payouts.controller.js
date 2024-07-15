const PayoutService = require('../services/payouts.service');


exports.getEarnings = async (req, res, next) => {
    try {
        const { finderId, totalPayout, paidPayout, pendingPayout, nextPayoutDate } = req.body;
        const successRes = await PayoutService.updatePassbook(finderId, totalPayout, paidPayout, pendingPayout, nextPayoutDate);
        res.status(201).json({ status: true, data: successRes });
    } catch (error) {
        throw error;
    }
}


