import Link from 'next/link';
import React from 'react';

const BreadcrumbCreators = ({ title, back_home = false }) => {
  return (
    <section
      style={{
        backgroundImage: 'url(https://teamup.money/wp-content/uploads/2022/08/about-us-top.jpg)',
        height: '100vh',
        backgroundPosition: '2% 27%',
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
          borderRadius: '50%', // Create the curved effect
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
                  fontSize: '38px',
                }}
              >
               Safeguard your Intellectual Property (IP) effortlessly <br/> and maximize your revenue streams.<br/>
                Enhance Your IP Portfolio's Value Over Time
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
               Stress-Free Transactions with Transparent Process and No Hidden Costs Propel Your IP's Success!

              </p>
              <div style={{textAlign:'center'}}>
              <button  style={{backgroundColor:'#6f4ea0',color:'#ffffff',width:'210px',fontSize:'25px',
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
