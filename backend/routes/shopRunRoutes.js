const express =require("express");
const router = express.Router();
const  { authshop} = require(".././middlewares/auth");

const {setShopStatus,getShopStatus,setShopTime,getShopTime }=require("../controllers/shoprun");


// Shop auth router

//router.post("/setshopstautus" ,setShopStatus);
 router.post("/setshopstautus" ,authshop,setShopStatus);
//correct shop in req.body
router.get("/getshopstautus/:_id" ,getShopStatus);
router.get("/getshopstautusforshop" ,authshop,getShopStatus);
// router.post("/setshoptime" ,authshop,setShopTime);
//correct shop in req.body
router.post("/setshoptime" ,setShopTime);

router.get("/getshoptime/:_id" ,getShopTime);


module.exports=router;