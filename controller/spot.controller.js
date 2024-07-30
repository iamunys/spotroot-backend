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
        next(error)

    }
}



exports.getSpots = async (req, res, next) => {
    try {
        const { finderId,status } = req.params;
        const successRes = await SpotService.getSpots(finderId,status);
        res.status(200).json({ status: true, data: successRes });
    } catch (error) {
        next(error)

    }


}

exports.editSpots = async (req, res, next) => {
    try {
        const { finderId,_id,...rest } = req.body;
        const successRes = await SpotService.updateSpots(_id,rest);
        res.status(200).json({ status: true, data: successRes });
    } catch (error) {
        next(error)

    }
}


exports.updateSpotsStatus = async (req, res, next) => {
    try {
        const { spotId,status } = req.params;
        const successRes = await SpotService.editSpotsStatus(spotId,status);
        res.status(200).json({ status: true, data: successRes });
    } catch (error) {
        next(error)

    }  

}


exports.getPlaces = async (req, res, next) => {
    try {
        const { query } = req.params;
        console.log(query);
        const successRes = await SpotService.getPlaces(query);
        res.status(200).json({ status: true, data: successRes });
    } catch (error) {
        next(error)
    }

}

exports.getPlacesDetails = async (req, res, next) => {
    try {
        const { placeId } = req.params;
        console.log(placeId);
        const successRes = await SpotService.getPlacesDetails(placeId);
        res.status(200).json({ status: true, data: successRes });
    } catch (error) {
        next(error)
    }

}


