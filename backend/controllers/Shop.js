const Otp=require("../models/Otp");
const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken");
const { passwordUpdated } = require("../emailtemplates/mail/templates/passwordUpdate");
const mailSender=require("../utils/mailsender");
const PrintShop = require("../models/PrintShop");
let uniidp=0;


//sendotp
exports.sendOTPforshop=async(req,res)=>{

}
//signup data
exports.register=async(req,res)=>{
 
   }


   //login

exports.login=async(req,res)=>{
   
}


exports.changePassword=async(req,res)=>{
   
  }


exports.sendOTPforshopPasswordreset=async(req,res)=>{

  
}

exports.resetpassword=async(req,res)=>{
    
  
 }