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
        <div className="row">
          <div className="col-xxl-12">
            <div>
              <h3
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '800',
                  fontSize: '50px',
                }}
              >
              For Creators
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

                Enhance Your IP Portfolio's Value Over Time. <br/>

                <br/>

               Stress-Free Transactions with Transparent Process <br/> and No Hidden Costs Propel Your IP's Success!

              </p>
              <div style={{textAlign:'center'}}>
              <button  style={{backgroundColor:'#ffffff',color:'#00002B',width:'210px',fontSize:'25px',
             fontWeight:'600', margin: '0 auto',padding: "18px 18px",borderRadius:'32px',marginTop:'18px'}}>Get Started</button>
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbCreators;
