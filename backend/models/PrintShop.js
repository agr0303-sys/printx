const mongoose = require('mongoose');

const printShopSchema = new mongoose.Schema({
  shop_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true
  },
  status: {
    type: String,
    default: 'true' // Default value is 'close'
  },
  openTime: {
    type: String 
  }
});

const PrintShop = mongoose.model('PrintShop', printShopSchema);

module.exports = PrintShop;
