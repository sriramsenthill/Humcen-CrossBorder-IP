import React from 'react';
import { useState, useEffect } from 'react';
const image3 = "/assets/img/feature/Tab_Mockup_3.png";

const PlatformBusiness = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [widthNow, setWidth] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767 );
      setWidth(widthNow);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`tp-feature-arae pt-20 ${isMobile ? "pb-20" : "pb-100"} p-relative`}>
      <div className="container">
        <div className="row">
          <div className={`col-xl-6 col-lg-6  wow tpfadeRight ${isMobile ? "ml-0" : "ml-110"} ml-lg-0 mr-lg-50`} data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h2 className="tp-title-sm pb-40" style={{fontSize: isMobile ? "33px" :'42px', textAlign: "justify", maxWidth: widthNow}}>The HumCen.io Platform for <span style={{  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',}}>Businesses</span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                <ul>
                    <li style={{ listStyle: 'disc',fontSize:'24px',margin:'15px',marginLeft:'25px' }}>Intuitive Dashboard</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Efficient Bulk Order Processing</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Portfolio Management</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Cross border IP in a click</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Blockchain-Powered Security</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px'}}>Real-time Progress Tracking</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>IP Monetization Tools</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Sell/Buy Opportunities</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px'}}>Budget categorizing</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px',margin:'15px',marginLeft:'25px' }}>Tailored Experience</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
            <div className="tp-fea-img col-12 d-lg-block" style={{ marginLeft: "-308px" , width: isMobile ? "390px" : "148%", height:"auto", marginTop:"-10px", position: "relative", left: isMobile ? "80%" : "5%"}}>
              <img src={image3} alt="" className={`${isMobile ? "ml-0" : "ml-130" } mt-130`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBusiness;
