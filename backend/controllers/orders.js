const User = require("../models/User");
const PrintShop = require("../models/PrintShop");
const Order = require("../models/Order");
const jwt = require('jsonwebtoken');
const otpGenerator=require("otp-generator");
const { io } = require('.././index'); 
//order variables 
//order_placed
//order_taked
//order_printed
//order_deliver
async function getShopNameById(shopId) {
    // Perform a database query to get the shop name based on the shop ID
    const shop = await PrintShop.findOne({ _id: shopId }).select('name');
    return shop ? shop.name : null; // Return shop name or null if not found

}
async function getUserNameById(userId) {
    // Perform a database query to get the shop name based on the shop ID
    const user = await User.findOne({ _id: userId }).select('name');
    return user ? user.name : null; // Return user name or null if not found

}


//user send a ordder
exports.makeorder = async (req, res) => {
   
}
//update status by shop
exports.takeOrder = async (req, res) => {
   
};
//update stautus of printed by shop
exports.order_printed = async (req, res) => {
    
};
//update stautus order delivered
exports.order_deliver = async (req, res) => {
    
};


//getorder by shop id in of your choice delivery status 
exports.getOrdersByShopAndStatus = async (req, res) => {
   
};


//getorder by shop id in of your choice delivery status 
exports.getOrdersByForUserAndStatus = async (req, res) => {
   
};

