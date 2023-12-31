import mongoose from "mongoose";

const transaction_schema = new mongoose.Schema({
  transaction_id: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  lender_id: {
    type: String,
    required: true,
  },
  borrower_id: {
    type: String,
    required: true,
  },
  transaction_time: {
    type: Date,
    required: true,
  },
  transaction_status: {
    type: String,
    required: true,
    enum: ["success", "pending", "failed"],
  },
  offer_request_id: {
    type: String,
    required: true,
  },
});

const transaction_model = mongoose.model("transactions", transaction_schema);

export default transaction_model;
