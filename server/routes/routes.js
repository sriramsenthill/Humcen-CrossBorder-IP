const express = require("express");
const form = require("../register/form"); // Importing File which contains API for Fetching and Storing Registered Details
const router = express.Router();


router.post("/api/save-user", form.saveTheRegistrationData);


module.exports = router;