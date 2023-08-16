const Enquiry = require("../schemas/enquiry"); // Importing Enquiry Model

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


module.exports = {
    saveTheRegistrationData,
}