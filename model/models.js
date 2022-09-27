const mongoose = require("mongoose");

// Schema for Address
const addressSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

//Creating the collection Address
const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
