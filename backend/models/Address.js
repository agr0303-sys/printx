const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  address_id: {
    type: Number,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;