const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const spotSchema = new Schema({
    finderId: {
        type: String,
        lowerCase: true,
        required: true,
    },
    imageId: {
        type: String,
        lowerCase: true,
        required: true,
    },
    currentLocation: {
        type: String,
        lowerCase: true,
    },
    landMark: {
        type: String,
        lowerCase: true,
    },
    spotName: {
        type: String,
        lowerCase: true,
    },
    spotDescription: {
        type: String,
        lowerCase: true,
    },
    spotType: [{
        type: String,
        lowerCase: true,
    }],
    isHaveEntryTime: {
        type: String,
        lowerCase: true,
    },
    entryTimeDetails: {
        type: String,
        lowerCase: true,
    },
    isOpenAllDay: {
        type: String,
        lowerCase: true,
    },
    entryOpenDaysDetails: {
        type: String,
        lowerCase: true,
    },
    isHaveAnyCost: {
        type: String,
        lowerCase: true,
    },
    costDetails: {
        type: String,
        lowerCase: true,
    },
    isFamilyFriendly: {
        type: String,
        lowerCase: true,
    },
    isFoodHold: {
        type: String,
        lowerCase: true,
    },
    whatHave: {
        type: String,
        lowerCase: true,
    },
    visitAgain: {
        type: String,
        lowerCase: true,
    },
    visitAgainDetails: {
        type: String,
        lowerCase: true,
    },
    bestMonths: [{
        type: String,
        lowerCase: true,
    }],
    bestTime: [{
        type: String,
        lowerCase: true,
    }],
    moreAbout: {
        type: String,
        lowerCase: true,
    },
    addedDate: {
        type: String,
        lowerCase: true,
    },
    spotImg: [{
        type: String,
        lowerCase: true,
    }],
    adminApproved: {
        type: Boolean,
        lowerCase: true,
    },
});

const SpotModel = db.model('addedSpots', spotSchema);
module.exports = SpotModel;