const Order = require("../models/Order"); 

exports.getOrderPaced = async (req, res) => {
    try {
        const orders = await Order.find({ delivery_status: 'Order_Placed' });
        res.status(200).json({
            success: true,
            orders,
            message: "Orders with delivery_status 'Order_Placed' retrieved successfully"
        });
    } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error - Error retrieving orders"
        });
    }
};


exports.getOrderTake = async (req, res) => {
    try {
        const orders = await Order.find({ delivery_status: 'order_taked' });
        res.status(200).json({
            success: true,
            orders,
            message: "Orders with delivery_status 'order_taked' retrieved successfully"
        });
    } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error - Error retrieving orders"
        });
    }
};

exports.getOrderPrinted = async (req, res) => {
    try {
        const orders = await Order.find({ delivery_status: 'order_printed' });
        res.status(200).json({
            success: true,
            orders,
            message: "Orders with delivery_status 'order_printed' retrieved successfully"
        });
    } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error - Error retrieving orders"
        });
    }
};


exports.getOrderdeliver = async (req, res) => {
    try {
        const orders = await Order.find({ delivery_status: 'order_deliver' });
        res.status(200).json({           
            success: true,
            orders,
            message: "Orders with delivery_status 'order_deliver' retrieved successfully"
        });
    } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error - Error retrieving orders"
        });
    }
};