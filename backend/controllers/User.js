const User =require("../models/User");
const Otp=require("../models/Otp");
const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
//const Profile = require("../models/Profile");
const jwt =require("jsonwebtoken");
const { passwordUpdated } = require("../emailtemplates/mail/templates/passwordUpdate");
const mailSender=require("../utils/mailsender");
let uniid=0;
//send otp  done
exports.sendOTP=async(req,res)=>{

}

//sign up  done
exports.signUp=async(req,res)=>{
     

    }
// login  done
exports.login=async(req,res)=>{
   
}
//chang password
exports.changePassword=async(req,res)=>{
 
}

exports.sendOTPforUserPasswordreset=async(req,res)=>{

}

exports.resetpassword=async(req,res)=>{
    
    try{
         //ftech data
          const { email ,password,confirmPassword,otp}=req.body;
      
      
       if( !email || !password
           || !confirmPassword || !otp  ){
               return res.status(403).json({
                   success:false,
                   message:"Please enter all details "
               })
           }
        //password verifivation
        if(password !==confirmPassword){
           return res.status(400).json({
               success:false,
               message:"Confirm password doesnot matched"
           })
        }   
         //check user presencee
    
        // Check if user already exists
           const existingUser = await User.findOne({ email });
           if (!existingUser) {
               return res.status(400).json({
                   success: false,
                   message: "User not  exists. Please sign in to continue.",
               });
           }
    
       //find most recent otp stored for the user
       const recentotp=await Otp.find({email}).sort({createdAt:-1}).limit(1);
       //validate otp
       if(recentotp.length==0){
           return res.status(400).json({ success:false,message:recentotp})
    
       }
       if(recentotp[0].otp!==otp){
           console.log("recent "+recentotp)
           return res.status(401).json({ success:false,message:"Invalid Otp"})
           
       }
    
        const hashedpassword=await bcrypt.hash(password,10);
       console.log("I am here");
        //entry created in Db
        const Shop=await User.findOneAndUpdate({email},{password:hashedpassword}, {new:true});
        res.status(200).json({
           success:true,
           Shop,
           message:"Entry updated successfully"
        })
    
    
       }
    
       catch(err){
           console.log(err);
           res.status(500).json({
               success:false,
               helper:"error while entry a new user",
               message:err.message,
            })
       }
 }