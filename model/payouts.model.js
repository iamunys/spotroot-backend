const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const payoutSchema = new Schema({
    finderId: {
        type: String,
        lowerCase: true,
        required: true,
    },
    totalPayout: {
        type: String,
        lowerCase: true,
        required: true,
    },
    paidPayout: {
        type: String,
        lowerCase: true,
        required: true,
    },
    pendingPayout: {
        type: String,
        lowerCase: true,
        required: true,
    },
    lastPayoutDate: {
        type: String,
        lowerCase: true,
        // required: true,
    },
},);


const PayoutModel = mongoose.model('payouts', payoutSchema);


module.exports = PayoutModel;