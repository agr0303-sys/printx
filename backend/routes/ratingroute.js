const express =require("express");
const router = express.Router();
const  { authuser} = require(".././middlewares/auth");


const { setRating,getRatings}=require("../controllers/rating");


// Shop auth router

//router.post("/giveratings" ,setRating);
router.post("/giveratings" ,authuser,setRating);

router.get("/checkratings/:printshopId",getRatings);

module.exports=router;