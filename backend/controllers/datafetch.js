const PrintShop = require("../models/PrintShop");

exports.getAllPrintShops = async (req, res) => {
    try {
        // Fetch all print shops from the database
        const printShops = await PrintShop.find({}, 'id name street city');

        // Check if any print shops are found
        if (printShops.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No print shops found in the database.',
            });
        }

        // Prepare the response data
        const shopsData = printShops.map(shop => ({
            id: shop.id,
            name: shop.name,
            street: shop.street,
            city: shop.city,
        }));

        // Send the response
        res.status(200).json({
            success: true,
            printShops: shopsData,
            message: 'Print shops retrieved successfully.',
        });
    } catch (error) {
        console.error('Error fetching print shops:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error - Error fetching print shops.',
        });
    }
};

exports.getAllPrintShopsbycity = async (req, res) => {
    try {
        // Extract the city parameter from the request query
        const { city } = req.query;

        // Define the filter based on the city parameter
        const filter = city ? { city: city } : {};

        // Fetch print shops from the database based on the filter
        const printShops = await PrintShop.find(filter, 'city');

        // Check if any print shops are found
        if (printShops.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No print shops found${city ? ` in ${city}` : ''}.`,
            });
        }

        // Prepare the response data
        const shopsData = printShops.map(shop => ({
            id: shop.id,
            name: shop.name,
            street: shop.street,
            city: shop.city,
        }));

        // Send the response
        res.status(200).json({
            success: true,
            printShops: shopsData,
            message: `Print shops${city ? ` in ${city}` : ''} retrieved successfully.`,
        });
    } catch (error) {
        console.error('Error fetching print shops:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error - Error fetching print shops.',
        });
    }
};
