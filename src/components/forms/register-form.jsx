import React from 'react';
import { Card } from '@material-ui/core';
import { CFormSwitch } from '@coreui/react'
import { useState } from 'react';
import DropDown from '../elements/dropdown';
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import useFirebase from '../../hooks/use-firebase';
import { useSelector } from 'react-redux';


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
  const {registerWithEmailPassword} = useFirebase();
  const [totalTypes, setTypes] = useState(types);
  const [totalMedium, setMedium] = useState(mediums);
  const [medium, handleMediumChange] = useState("");
  const [type, handleTypeChange] = useState("");
  const [different, setDifferent] = useState(false);

  const handleTypeSelect = (selectedType) => {
    // Do something with the selectedType, e.g., set it in the form values
    handleTypeChange(selectedType);
  };

  const handleMediumSelect = (selectedMedium) => {
    handleMediumChange(selectedMedium);
  };

  console.log(type);
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      registerWithEmailPassword(values.email,values.password,values.name)
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit} style={{
      paddingBottom: "50px",
    }}>
      <div className="tp-number">
        <label htmlFor="name">Name</label>
        <input value={values.name} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your name" id="name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="email">Email</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Email" id="email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="phone">Phone</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Phone Number" id="phone" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="comp">Company/Organization</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter Company/Organization Name" id="comp" />
      </div>
      <div className="tp-mail">
        <label htmlFor="comp">Message</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Type your Message Here" id="comp" />
      </div>
      <div className="tp-mail">
        <label htmlFor="comp">Enquiry Type</label>
        <DropDown intro="Select a Type" choices={totalTypes} onSelect={handleTypeSelect} selectedType={type}/>
      {type === totalTypes[4] && <div style={{
        paddingTop: "20px",
      }}> <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter the Enquiry Type" id="comp" /> </div>}
      </div>

      <div className="tp-mail" style={{
        paddingBottom: "20px",
      }}>
        <label htmlFor="comp">How did you hear about us?</label>
        <DropDown intro="Select the Medium" choices={totalMedium} onSelect={handleMediumSelect} selectedType={medium}/>
      {medium === totalMedium[3] && <div style={{
        paddingTop: "20px",
      }}> <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter the Medium" id="comp" /> </div>}
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
          }} id="updates" label="Yes, I want to receive updates and news about the Platform."/>
      </div>

      <div className="tp-login-button">
        <button className="tp-btn mr-55" style={{ backgroundColor: "#00002B" }} type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;