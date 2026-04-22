const express =require("express");
const router = express.Router();
const  { authuser,authshop} = require(".././middlewares/auth");

const { makeorder,takeOrder,order_deliver,order_printed,getOrdersByShopAndStatus,getOrdersByForUserAndStatus}=require("../controllers/orders");


// Shop auth router

router.post("/sendorder" ,authuser,makeorder);
//router.post("/sendorder" ,makeorder);

 router.post("/takeorder" ,authshop,takeOrder);
//router.post("/takeorder" ,takeOrder);


router.post("/orderprinted" ,authshop,order_printed);
//router.post("/orderprinted" ,order_printed);



 router.post("/orderdeliver"  ,authshop,order_deliver);
//router.post("/orderdeliver"  ,order_deliver);



//for especially shop 

//get orders by sho[id and theri staus 
 router.post("/ordersdetailsbyshopid" ,authshop,getOrdersByShopAndStatus);
//router.post("/ordersdetailsbyshopid" ,getOrdersByShopAndStatus);



//get orders by userid and theri staus 
 router.post("/ordersdetailsbyuserid"   ,authuser,getOrdersByForUserAndStatus);
//router.post("/ordersdetailsbyuserid"   ,getOrdersByForUserAndStatus);


module.exports=router;