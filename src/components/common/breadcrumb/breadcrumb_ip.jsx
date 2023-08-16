import Link from 'next/link';
import React from 'react';

const BreadcrumbIP = ({ title, back_home = false }) => {
  return (
    <section
    style={{
      backgroundImage: 'url(assets/img/brand/bg.png)', // Updated image path
      height: '100vh',
      backgroundPosition: 'center', // Center the background image
      backgroundSize: 'cover', // Make the background image cover the entire area
      position: 'relative', // Add this to enable curved bottom
      overflow: 'hidden', // Hide the overflow for curved effect
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
          height: '100%',
        }}
      >
        <div className="row wow tpfadeUp">
          <div className="col-xxl-12">
            <div>
              <h3
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '800',
                  fontSize: '50px',
                  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',
                }}
              >
                HumCen.io for IP Professionals
              </h3>
              <p
                style={{
                  color: '#f1f1f1',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  fontSize: '25px',
                  marginTop:'20px',
                }}
              >
               Cross-Border IP Opportunities Await Join, Work Remotely, and Thrive.
                                <br/>
                                <br/>

             Join our platform as we onboard skilled IP professionals from around the world.<br/> Unlock abundant job prospects, work remotely, and boost your earnings.
              </p>
              <div style={{textAlign:'center'}}>
              <button className="tp-btn mr-55" style={{ backgroundColor: "#ffffff",color:'#232323' }}><a href="/register">Get In Touch</a></button>
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbIP;
