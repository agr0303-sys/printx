const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  payment_id: {
    type: Number,
    required: true,
    unique: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  payment_method: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  transaction_id: {
    type: String,
    required: true,
    unique: true
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;