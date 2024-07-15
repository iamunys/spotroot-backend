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
            return await createSpot.save();
        } catch (err) {
            throw err;
        }
    }


    static async getSpots(finderId) {
        try {
            const getSpots = await SpotModel.find({finderId});
            return getSpots;
        } catch (err) {
            throw err;
        }
    }


}


module.exports = SpotService;