const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  printshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PrintShop',
    required: true
  },
  payment_id: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true,
    unique: true
  },
  tokend: {
    type: Number,
    required: true,
   
  },
  payment_mode: {
    type: String,
    required: true
  },
  order_total: {
    type: Number,
    required: true
  },
  delivery_status: {
    type: String,
    default: 'order_placed'
  },
  orders: [
    {
      Instructions: {
      type: mongoose.Schema.Types.Mixed,
    
      },
      fileId: {
        type: [String],
        required: true
      }
    }
  ]
},
{
  timestamps: true // Add timestamps (createdAt, updatedAt) to the schema
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
