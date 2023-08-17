import Link from 'next/link';
import React from 'react';

const BreadcrumbCreators = ({ title, back_home = false }) => {
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
                  color:'ffffff',
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '800',
                  fontSize: '50px',
                  marginTop:'50px',
                  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',
                }}
              >
              HumCen.io for Creators
              </h3>
              <p
                style={{
                  color: '#f1f1f1',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontWeight: '200',
                  fontSize: '23px',
                  marginTop:'20px',
                  textAlign: "center",
                }}
              >
                Safeguard your Intellectual Property (IP) effortlessly <br/> and maximize your revenue streams.<br/>
                <br/>

                Enhance Your IP Portfolios Value Over Time. <br/>

                <br/>

               Stress-Free Transactions with Transparent Process <br/> and No Hidden Costs Propel Your IP Success!

              </p>
              <div style={{textAlign:'center'}}>
              <Link href="/register">
              <button className="tp-btn mr-55 mt-50" style={{ backgroundColor: "#ffffff",color:'#232323' }}>Get In Touch</button>
              </Link>
         
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbCreators;
