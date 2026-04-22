const express =require("express");
const router = express.Router();

const {getOrderPaced,getOrderPrinted,getOrderTake,getOrderdeliver }=require("../controllers/getorderadmin");




router.get("/getorderplace" ,getOrderPaced);

router.get("/getorderprinted",getOrderPrinted);

router.get("/getordertake",getOrderTake);

router.get("/getorderdeliver",getOrderdeliver);

module.exports=router;