const express =require("express");
const router = express.Router();


const {getAllPrintShops,getAllPrintShopsbycity }=require("../controllers/datafetch");


// Shop auth router

router.get("/sendshops" ,getAllPrintShops);
router.get("/sendshopsbycity" ,getAllPrintShopsbycity);




module.exports=router;