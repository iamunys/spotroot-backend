const SpotService = require('../services/spot.service');

exports.createSpots = async (req, res, next) => {
    try {
        const { finderId,
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
            moreAbout,
            addedDate,
            spotImg,
            adminApproved
        } = req.body;
        await SpotService.createASpot(
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
            moreAbout,
            addedDate,
            spotImg,
            adminApproved);

        res.status(201).json({ status: true, success: 'Spot Added Successfully' });
    } catch (error) {
        throw error;
    }
}



exports.getSpots = async (req, res, next) => {
    try {
        const { finderId } = req.body;
        const successRes = await SpotService.getSpots(finderId);
        res.status(201).json({ status: true, data: successRes });
    } catch (error) {
        throw error;
    }


}