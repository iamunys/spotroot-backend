const PayoutService = require('../services/payouts.service');


exports.getEarnings = async (req, res, next) => {
    try {
        const { finderId, totalPayout, pendingPayout, lastPayoutDate } = req.body;
        const successRes = await PayoutService.updatePassbook(finderId, totalPayout, pendingPayout, lastPayoutDate);
        res.status(201).json({ status: true, data: successRes });
    } catch (error) {
        // throw error;
        next(error)

    }
}

exports.getEarningAdmin = async (req, res, next) => {
    try {
        const { finderId } = req.params;
        const successRes = await PayoutService.getIncomUsingId(finderId);
        res.status(200).json({ status: true, data: successRes });
    } catch (error) {
        next(error)

    }
}


