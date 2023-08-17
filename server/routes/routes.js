const express = require("express");
const form = require("../new_members/form"); // Importing File which contains API for Fetching and Storing Registered Details
const router = express.Router();


router.post("/api/save-user", form.saveTheRegistrationData); // API for saving the details of New User

router.put("/api/notify-customer", form.notifyCustomers); // API to send Email to the Customer as well as to update in Admin Database

module.exports = router;