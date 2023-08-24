import React from 'react';
import {useState, useEffect} from "react"
import RegisterForm from '../forms/register-form';

const RegisterArea = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767 );
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="tp-login-area">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center">
            <div className={`col-xl-6 col-lg-6 ${isMobile ? "col-9" : "col-12"}`}>
              <div className={`tp-login-thumb ${isMobile ? "pt-20" : "login-space"} ${isMobile ? "mb-30" : "mb-0"} sky-bg d-flex justify-content-center`} style={{
                backgroundColor: "white",
                position: "relative",
                left: isMobile && "25%",
              }}>
                <img className='h-100' src="/assets/img/contact/icon humcen.png" style={{marginBottom: isMobile ? "30px" : "350px"}} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-login-wrapper d-flex justify-content-center">
                <div className="tplogin">
                  <div className="tplogin__title">
                    <h3 className="tp-login-title">Enquiry Form</h3>
                  </div>
                  <div className="tplogin__form">
                    <RegisterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;