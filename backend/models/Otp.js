const mongoose=require("mongoose");
const mailSender = require("../utils/mailsender");
const emailTemplate = require("../emailtemplates/mail/templates/emailVerificationTemplate");

const OtpSchema=new mongoose.Schema({
    email:{type:String,required:true},
    otp:{type:String,required:true},
   createdAt:{ type:Date,default:Date.now(),expires:5*60},
   
    
})

async function sendverificationEmail(email,otp){
    try{
         const mailResponse=await mailSender(email,"Verify the OTP",emailTemplate(otp));
         console.log("Email send successfully");
    }catch(err){
        console.log("error occured at sending email ",err);
        throw err;
    }
}

OtpSchema.pre("save",async function(next){
    // await sendverificationEmail(this.email,this.otp);
    // next();
    console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendverificationEmail(this.email, this.otp);
	}
	next();
})

module.exports=mongoose.model("Otp",OtpSchema);