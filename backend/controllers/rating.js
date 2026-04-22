const Rating = require("../models/Rating");

const PrintShop = require("../models/PrintShop");
const Order=require("../models/Order")
// Controller to set rating for a PrintShop
exports.setRating = async (req, res) => {
    try {
        const { user, rating, message ,orderId } = req.body;
        // Validate if printshopId, user, and rating are provided
        if (!orderId || !user || !rating) {
            return res.status(400).json({ success: false, message: 'Bad Request - PrintShop _id, user, and rating are required' });
        }

        // Check if the PrintShop exists
        const printshop = await Order.findById(orderId);
        if (!printshop) {
            return res.status(404).json({ success: false, message: 'Not Found - PrintShop not found' });
        }

        // Create a new rating entry
        const newRating = await Rating.create({ user, printshop: printshop.printshop, rating, message });

        res.status(201).json({
            success: true,
            rating: newRating,
            message: 'Rating successfully set for the PrintShop'
        });
    } catch (error) {
        console.error('Error setting rating:', error);

        res.status(500).json({
            success: false,
            message: 'Internal Server Error - Error setting rating'
        });
    }
};

// Controller to get ratings for a PrintShop
exports.getRatings = async (req, res) => {
    try {
        const { printshopId } = req.params; // Assuming printshopId is passed as a route parameter

        // Validate if printshopId is provided
        if (!printshopId) {
            return res.status(400).json({ success: false, message: 'Bad Request - PrintShop _id is required' });
        }

        // Check if the PrintShop exists
        const printshop = await PrintShop.findById(printshopId);
        if (!printshop) {
            return res.status(500).json({ success: false, message: 'Not Found - PrintShop not found' });
        }

        // Get all ratings for the PrintShop
        const ratings = await Rating.find({ printshop: printshopId });

        // Calculate the average rating
        const totalRatings = ratings.reduce((sum, currentRating) => sum + currentRating.rating, 0);
        const averageRating = ratings.length > 0 ? totalRatings / ratings.length : 0;

        res.status(200).json({
            success: true,
            ratings,
            averageRating,
            message: 'Ratings retrieved successfully for the PrintShop'
        });
    } catch (error) {
        console.error('Error getting ratings:', error);

        res.status(500).json({
            success: false,
            message: 'Internal Server Error - Error getting ratings'
        });
    }
};
