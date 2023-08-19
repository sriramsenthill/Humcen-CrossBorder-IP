import React from 'react';
import {useState, useEffect} from "react";
const image3 = "/assets/img/feature/Tab Mockup_1.png";

const PlatformIP = () => {
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
        <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
     <div className="tp-fea-img col-12 d-lg-block" style={{ marginLeft: "-308px" , width: isMobile ? "390px" : "148%", height:"auto", marginTop:"-10px", position: "relative", left: isMobile ? "75%" : "5%"}}>
    <img src={image3} alt="" className={`${isMobile ? "ml-0" : "ml-130" } mt-40`} />
  </div>
     </div>

          <div className={`col-xl-6 col-lg-6  wow tpfadeRight ${isMobile ? "ml-0" : "ml-110"} ml-lg-0 mr-lg-50`} data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h2 className="tp-title-sm pb-40" style={{fontSize: isMobile ? "37px" :'45px', textAlign: "justify", maxWidth: widthNow}}>The HumCen.io Platform for<br/> <span style={{  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',fontSize:'40px'}}>IP Professionals</span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                <ul>
                    <li style={{ listStyle: 'disc',fontSize:'24px',margin:'15px',marginLeft:'25px' }}>Intuitive Dashboard</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Access to Cross Border Demand</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Dynamic Earnings Potential</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Comprehensive Portfolio Control</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Future of Work Culture</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px'}}>Blockchain-Powered Security</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Real-time Progress Tracking</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Effortless Bulk Order Handling</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px'}}>Expert Knowledge Exchange</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px',margin:'15px',marginLeft:'25px' }}>Tailored User Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformIP;