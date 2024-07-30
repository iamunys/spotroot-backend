const SpotModel = require('../model/spot.model')
const cache = require('../middleWare/cacheService');
const axios = require('axios');

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

    static async getPlaces(query) {

        const cachedResult = cache.get(query);

        if (cachedResult) {
          return cachedResult;
        }
      
        try {
          const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
            params: {
              input:query,
                  key: process.env.GOOGLE_PLACES_API_KEY,
                //   location: location, // optional: bias results to a specific area
                  radius: 10000, // optional: radius in meters to bias results
                //   types: 'establishment'
            }
          });
      
          // Cache the result
          cache.set(query, response.data);
      
          return response.data;
        } catch (error) {
            throw err;
        }
    }




    static async getPlacesDetails(placeId) {

        const cachedResult = cache.get(placeId);

        if (cachedResult) {
          return cachedResult;
        }
      
        try {
            const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
                params: {
                  place_id: placeId,
                  key: process.env.GOOGLE_PLACES_API_KEY,
                }
          });
      
          // Cache the result
          cache.set(placeId, response.data.result);
      
          return response.data.result.geometry;
        } catch (error) {
            throw err;
        }
    }

}


module.exports = SpotService;