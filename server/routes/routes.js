const express = require("express");
const form = require("../new_members/form"); // Importing File which contains API for Fetching and Storing Registered Details
const router = express.Router();


router.post("/api/save-user", form.saveTheRegistrationData); // API for saving the details of New User


module.exports = router;