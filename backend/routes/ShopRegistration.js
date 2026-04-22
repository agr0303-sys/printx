const express =require("express");
const router = express.Router();


const { sendOTPforshop,register,login,changePassword,sendOTPforshopPasswordreset,resetpassword}=require("../controllers/Shop");


// Shop auth router

router.post("/sendOtp" ,sendOTPforshop);
router.post("/register",register);
router.post("/login",login);
router.post("/changepassword",changePassword)
router.post("/resetpasswordotp",sendOTPforshopPasswordreset);
router.post("/resetpassword",resetpassword);


module.exports=router;