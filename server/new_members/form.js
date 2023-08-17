const Enquiry = require("../schemas/enquiry"); // Importing Enquiry Model
const Admin = require("../schemas/admin"); // Importing Admin Model
const sendEmail = require("../email"); // Function to send Emails

const saveTheRegistrationData = async(req, res) => {
    try {
        const info = req.body;
        let userNo;
        const totalEnquiries = await Enquiry.find({});
        if(totalEnquiries) {
           userNo = totalEnquiries.length + 1;            
        } else {
           userNo = 0;
        } 
        const newUserObject = {
            ...info,
            userID: userNo
           };
        console.log(newUserObject);
        const newUser = new Enquiry(newUserObject).save().then(() => {
            console.log("New User registered Successfully.");
        }).catch((err) => {
            console.error("Error in Registering New User : " + err);
        });   
           
    } catch(error) {
        console.error("Error in getting Registration Data : " + error);
    }
}

const notifyCustomers = async(req, res) => {
    try {
        const adminDetails = await Admin.findOne({_id: "64803aa4b57edc54d6b276cb"});
        const emailID = req.body.customerEmail;
        // Updating Admin's Database
        adminDetails.notify_to.push(emailID);
        adminDetails.save().then(() => {
            console.log("Admin's Database Successfully Updated.")
        }).catch((err) => {
            console.error("Error in updating Admin's Database");
        });
        const subject = "Humcen.IO Platform Notification";
        const text = "Thanks for registering your Email Address at humcen.io . We are pleased to notify you about launching of Platform as soon as possible. Thank You!. Have a Great Day!.";
        // Sending Email to Customers
        sendEmail(emailID, subject, text);
        console.log("Email sent successfully");
    } catch(error) {
        console.error("Error in updating the Admin Schema as well as in sending Email to the Customers." + error);
    }
}

module.exports = {
    saveTheRegistrationData,
    notifyCustomers,
}