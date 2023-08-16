const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  userID: {
    type: Number,
  },
  name:{
    type: String,
  },
  email:{
    type: String,
  } ,
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  message: {
    type: String,
  },
  enquiry: {
    type: String,
  },
  medium: {
    type: String,
  },
  updates: {
    type: Boolean,
    default: false,
  },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema, "enquiry");

module.exports = Enquiry;
