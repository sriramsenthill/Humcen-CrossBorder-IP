const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,

  },
  surname: {
    type: String,

  },
  email: {
    type: String,

  },
  password: {
    type: String,
  },
  phone: {
    type: String,

  },
  billing: {
    bank_name: {
      type: String,
    },
    account_number: {
      type: String,
    },
    account_name: {
      type: String,
    },
    branch: {
      type: String,
    },
    ifsc_code: {
      type: String,
    },
    address: {
      type: String,
    },
    town: {
      type: String,
    },
    postcode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  applicant_details: {
    applicant_type: {
      type: String,
    },
    business_name: {
      type: String,
    },
    company_id: {
      type: String,
    },
    vat_payer: {
      type: String,
    },
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    position: {
      type: String,
    },
    street: {
      type: String,
    },
    town: {
      type: String,
    },
    postcode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  notify_to: {
    type: [String]
  },
  pref: {
    essential_emails: {
      type: Boolean,
      default: false,
    },
    order_updates: {
      type: Boolean,
      default: false,
    },
    marketing_emails: {
      type: Boolean,
      default: false,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
  },
});

const Admin = mongoose.model('Admin', AdminSchema, 'admin');

module.exports = Admin;
