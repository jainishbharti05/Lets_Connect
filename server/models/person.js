const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: {
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
  address: {
    type: String,
    required: true,
  },
  account_details: {
    holder_name: String,
    bank_type: String,
    account_number: Number,
    IFSC: String,
    account_type: String,
  },
});
const Person = mongoose.model("Person", personSchema);

module.exports = { Person };


