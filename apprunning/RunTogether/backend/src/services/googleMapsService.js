const axios = require('axios');

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Ensure to set your API key in environment variables

const googleMapsService = {
    getNearbyPlaces: async (latitude, longitude, radius) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
                params: {
                    location: `${latitude},${longitude}`,
                    radius: radius,
                    key: GOOGLE_MAPS_API_KEY
                }
            });
            return response.data.results;
        } catch (error) {
            throw new Error('Error fetching nearby places: ' + error.message);
        }
    },

    getDirections: async (origin, destination) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
                params: {
                    origin: origin,
                    destination: destination,
                    key: GOOGLE_MAPS_API_KEY
                }
            });
            return response.data.routes;
        } catch (error) {
            throw new Error('Error fetching directions: ' + error.message);
        }
    }
};

module.exports = googleMapsService;