import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';

const Breadcrumb = ({ title, back_home = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1057);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
  style={{
    backgroundImage: 'url(assets/img/brand/bg.png)', // Updated image path
    height: isMobile ? "auto" : '100vh',
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Make the background image cover the entire area
    position: 'relative', // Add this to enable curved bottom
    overflow: 'hidden',
  }}
>
<div
        className="curved-bottom"
        style={{
          position: 'absolute',
          bottom: '-150px', // Adjust this value for desired curvature
          left: 0,
          right: 0,
          height: '250px', // Adjust this value for desired curvature height
          width: "auto",
          background: '#ffffff', // Background color to cover the curve
        }}
      ></div>

      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}
      >
        <div className={`row wow tpfadeUp ${isMobile ? "mt-80" : "mt-100"}`}>
          <div className="col-xxl-12">
            <div style={{
                padding: '20px', // Add padding to create space for the shadow
                paddingBottom: isMobile && "80px",
              opacity:'8.5',
                borderRadius: '10px', // Add border radius for the shadow effect
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)', // Add an extremely subtle box shadow
              }}>
              <h3
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '800',
                  fontSize: isMobile ? "50px" : '70px',
                  marginTop:'37px',
                  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',
                }}
              >
                About Us
              </h3>
              <p
                style={{
                  color: '#f1f1f1',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  fontSize: '25px',
                  marginTop:'40px',
                }}
              >
                HumCen.io is crafted by a team of IP specialists and Tech enthusiasts to
                <br />
                transform the landscape of Intellectual Property. 
                <br />
                <br />  
                Our platform empowers
               
                Cross-Border IP journeys for Innovators, Businesses 
                <br />
                and IP professionals, offering
          
                seamless IP asset management, protection, and monetization.
              </p>
              <div style={{textAlign: "center", position: "relative", bottom: isMobile && "60%",}}>
              <Link href="/register">
              <button className={`tp-btn mr-75 ${isMobile ? "mt-0" : "mt-40"} ${isMobile ? "mb-55" : "mb-25"}`} style={{ backgroundColor: "#ffffff",color:'#232323', textAlign: "center", position: "relative", left: isMobile ? "8%" : "2%"  }}>Get In Touch</button>
           </Link>
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
