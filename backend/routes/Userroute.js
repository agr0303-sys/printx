// Import the required modules
const express = require("express");
const router = express.Router();

// Import the required Controllers and Middleware functions
const {
    sendOTP,
    signUp,
    login,
    changePassword,
    resetpassword,
    sendOTPforUserPasswordreset
} = require("../controllers/User");


// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP);
// Route for user signup
router.post("/signup", signUp);
// Route for user login
 router.post("/login", login);
// Route for Changing the password
 router.post("/changepassword", changePassword);

 router.post("/resetpasswordotp", sendOTPforUserPasswordreset);

 router.post("/resetpassword", resetpassword);



// Export the router for use in the main application
module.exports = router;
