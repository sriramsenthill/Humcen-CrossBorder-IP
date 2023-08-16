import React from 'react';
import { Card } from '@material-ui/core';
import axios from "axios"
import { CFormSwitch } from '@coreui/react'
import { useState } from 'react';
import DropDown from '../elements/dropdown';
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import useFirebase from '../../hooks/use-firebase';
import { useSelector } from 'react-redux';

const api = axios.create({
  baseURL: "http://localhost:3002/api",
});


const types = [
  "Interested in IP Protection",
  "Interested in IP Management",
  "Interested in IP Monetization",
  "Interested in IP Partner",
  "Other (Please Specify)"
];

const mediums = [
  "Social Media",
  "Referral",
  "Online Search",
  "Other (Please Specify)"
];

const RegisterForm = () => {
  // register With Email Password
  const [totalTypes, setTypes] = useState(types);
  const [totalMedium, setMedium] = useState(mediums);
  const [medium, handleMediumChange] = useState("");
  const [type, handleTypeChange] = useState("");
  const [different, setDifferent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    enquiry: type,
    medium: medium,
    updates: false,
  })

  const handleTypeSelect = (selectedType) => {
    // Do something with the selectedType, e.g., set it in the form values
    setFormData(data => ({ ...data, enquiry: selectedType}))
  };

  const handleMediumSelect = (selectedMedium) => {
    // Do something with the selectedType, e.g., set it in the form values
    setFormData(data => ({ ...data, medium: selectedMedium}))
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Final : " + formData);
    const values = Object.values(formData);
    let proceed = true;
  
  values.forEach((value) => {
    if (value === '') {
      proceed = false;
    }
  });
  
  if (!proceed) {
    console.log("Please fill in all fields.");
    return;
  }
    try {
      const response = await api.post("save-user", formData);
      console.log("Response given Successfully");

    } catch(error) {
      console.error("Error in sending the Registered Information : " + error);
    }
    console.log("Hi");
  }
  console.log(type);
  // use formik

  return (
    <form onSubmit={handleSubmit} style={{
      paddingBottom: "50px",
    }}>
      <div className="tp-number">
        <label htmlFor="name">Name</label>
        <input value={formData.name} onChange={(e) => { setFormData(data => ({
          ...data,
          name: e.target.value,
        }))}}
           type="text" placeholder="Enter your name" id="name" required/>
      </div>
      <div className="tp-mail">
        <label htmlFor="email">Email</label>
        <input value={formData.email} onChange={(e) => { setFormData(data => ({...data, email: e.target.value}))}}
          type="email" placeholder="Enter your Email" id="email" required />
      </div>
      <div className="tp-mail">
        <label htmlFor="phone">Phone</label>
        <input value={formData.phone} onChange={(e) => { setFormData(data => ({...data, phone: e.target.value}))}}
          type="tel" placeholder="Enter your Phone Number" id="phone" required/>
      </div>
      <div className="tp-mail">
        <label htmlFor="comp">Company/Organization</label>
        <input value={formData.company} onChange={(e) => { setFormData(data => ({...data, company: e.target.value}))}}
         type="text" placeholder="Enter Company/Organization Name" id="comp" required/>
      </div>
      <div className="tp-mail">
        <label htmlFor="comp">Message</label>
        <input value={formData.message} onChange={(e) => { setFormData(data => ({...data, message: e.target.value}))}}
           type="text" placeholder="Type your Message Here" id="comp" required/>
      </div>
      <div className="tp-mail">
        <label htmlFor="comp">Enquiry Type</label>
        <DropDown intro="Select a Type" choices={totalTypes} onSelect={handleTypeSelect} selectedType={formData.enquiry}/>
      {type === totalTypes[4] && <div style={{
        paddingTop: "20px",
      }}> <input value={formData.enquiry} onChange={(e) => { setFormData(data => ({...data, enquiry: e.target.value}))}}
          type="text" placeholder="Enter the Enquiry Type" id="comp" required/> </div>}
      </div>

      <div className="tp-mail" style={{
        paddingBottom: "20px",
      }}>
        <label htmlFor="comp">How did you hear about us?</label>
        <DropDown intro="Select the Medium" choices={totalMedium} onSelect={handleMediumSelect} selectedType={formData.medium}/>
      {medium === totalMedium[3] && <div style={{
        paddingTop: "20px",
      }}> <input value={formData.medium} onChange={(e) => { setFormData(data => ({...data, medium: e.target.value}))}}
         type="text" placeholder="Enter the Medium" id="comp" required/> </div>}
      </div>

      <div style={{
        paddingBottom: "50px",
      }}>
      <label htmlFor='updates' style={{
        color: "black",
      }}>Subscribe to Updates</label>
          <CFormSwitch style={{
            width: "32px",
            height: "20px",
            fontSize: "18",
          }} id="updates" label="Yes, I want to receive updates and news about the Platform." checked={formData.updates} onChange={(e) => setFormData(data => ({...data, updates: !formData.updates}))}/>
      </div>

      <div className="tp-login-button">
        <button className="tp-btn mr-55" style={{ backgroundColor: "#00002B" }} type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;