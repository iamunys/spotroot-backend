const SpotModel = require('../model/spot.model')

class SpotService {
    static async createASpot(
        finderId,
        imageId,
        currentLocation,
        landMark,
        spotName,
        spotDescription,
        spotType,
        isHaveEntryTime,
        entryTimeDetails,
        isOpenAllDay,
        entryOpenDaysDetails,
        isHaveAnyCost,
        costDetails,
        isFamilyFriendly,
        isFoodHold,
        whatHave,
        visitAgain,
        visitAgainDetails,
        bestMonths,
        bestTime,
        moreAbout, addedDate, spotImg, adminApproved) {
        try {
            const createSpot = new SpotModel({
                finderId, imageId,
                currentLocation,
                landMark,
                spotName,
                spotDescription,
                spotType,
                isHaveEntryTime,
                entryTimeDetails,
                isOpenAllDay,
                entryOpenDaysDetails,
                isHaveAnyCost,
                costDetails,
                isFamilyFriendly,
                isFoodHold,
                whatHave,
                visitAgain,
                visitAgainDetails,
                bestMonths,
                bestTime,
                moreAbout, addedDate, spotImg, adminApproved
            });
            createSpot.adminApproved = false
            return await createSpot.save();
        } catch (err) {
            throw err;
        }
    }


    static async getSpots(finderId, status) {
        try {
            let getSpots = []

            if (finderId === 'all') {
                if (status === 'pending') {
                    getSpots = await SpotModel.find({adminApproved: false });
                } else if (status === 'approved') {
                    getSpots = await SpotModel.find({adminApproved: true });
                } else if (status === 'all') {
                    getSpots = await SpotModel.find({});
                }
            } else {
                if (status === 'pending') {
                    getSpots = await SpotModel.find({ finderId, adminApproved: false });
                } else if (status === 'approved') {
                    getSpots = await SpotModel.find({ finderId, adminApproved: true });
                } else if (status === 'all') {
                    getSpots = await SpotModel.find({ finderId });
                }
            }
                return getSpots;
             } catch (err) {
            throw err;
        }
    }

    static async updateSpots(spotId, data) {
        try {
            let getSpots = await SpotModel.updateOne(
                { _id:spotId },
                {
                    $set: {
                        ...data
                    }
                }
            );

            return getSpots;
        } catch (err) {
            throw err;
        }
    }

    static async editSpotsStatus(spotId, status) {
        try {
            let getSpots = await SpotModel.updateOne(
                { _id:spotId },
                {
                    $set: {
                        adminApproved: status
                    }
                }
            );

            return getSpots;
        } catch (err) {
            throw err;
        }
    }

}


module.exports = SpotService;