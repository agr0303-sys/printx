const User =require("../models/User");
const jwt=require("jsonwebtoken");
require("dotenv").config();
// const jwt = require('jsonwebtoken');

//userauth 
exports.authuser = async (req, res, next) => {
    try {
        console.log("auth user work ");
      
        const token=req.headers.authorization;
        console.log("auth user work token is ",token);
        if (!token) {
            console.log("token is missing ")
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }
     console.log("token come ");
        const word = token.substring(7);
        console.log("token come and word is  ",word);
        let user = "ffj";

        try {
            const decode = await jwt.verify(word, process.env.JWT_SECRET || "fdjfjfejf dsfj sdf");
            user = decode.id;
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }
      console.log("final toke to send is",user)
        // Add the user ID to req.body
        req.body.user = user;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Error in addUserToBody middleware:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

exports.authshop = async (req, res, next) => {
    try {
        const token=req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        const word = token.substring(7);

        let shop = "ffj";

        try {
            const decode = await jwt.verify(word, process.env.JWT_SECRET || "fdjfjfejf dsfj sdf");
            shop = decode.shopid;
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }

        // Add the user ID to req.body
        req.body.shop = shop;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Error in addshopToBody middleware:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
