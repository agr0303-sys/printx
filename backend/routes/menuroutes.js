const express =require("express");
const router = express.Router();


const {addMenuItem,deleteMenuItem,getAllMenuByShopId }=require("../controllers/menu");
const {authshop}=require("../middlewares/auth")


router.post("/addmenu" ,addMenuItem);

router.post("/deletemenuitem",deleteMenuItem);

router.post("/getmenufromshopid",getAllMenuByShopId);
router.post("/getmenufromshopidshop",authshop,getAllMenuByShopId);



module.exports=router;