
const mongoose = require("mongoose");

require("dotenv").config();

exports.connect=()=>{
   mongoose.connect("mongongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
   })
   .then(()=>console.log("MongoDb data base connected successfully at address "+process.env.MONGODB_URL))
   .catch((err)=>{
    console.log("MongoDb database not connected due to this  server is stoped ");
   console.error(err);
   process.exit(1);
   })

}

