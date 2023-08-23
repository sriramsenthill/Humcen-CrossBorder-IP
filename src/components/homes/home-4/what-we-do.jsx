import React from 'react';
import { useState, useEffect } from 'react';

const tabImage = "/assets/img/feature/fea-1 copy.png";

const WhatWeDo = () => {
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
       <div className={`ac-chose-bg3 ${isMobile ? "mb-0" : "mb-50"}`}>
        <div className="row">
        <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
      { !isMobile && <div className="tp-fea-img col-12 d-lg-block" style={{ marginLeft: "-308px" , width: isMobile ? "420px" : "170%", height: "auto", marginTop:"-10px", position: "relative", left: isMobile && "60%"}}>
       <img src={tabImage} alt="" className='ml-40 mr-100 mt-0 mb-30' />
     </div>}
      </div>
          <div className="col-xl-6 col-lg-6 ml-lg-180 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
          <div className="sd-service-details-paragraph">
                 <h3 className="tp-title-sm service-details-space center mb-0 mt-140" style={{marginTop: isMobile && "15px"}}>What <span style={{background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',paddingRight: "2px"}} >We Do</span></h3>
                <p className="pb-15 mt-40" style={{textAlign:"justify"}}>HumCen.io is a Blockchain-driven Cross-Border IP aggregator platform that empowers IP journey worldwide. Innovators and Businesses can get expert IP assistance, secure IP transactions, and strategic portfolio management, enabling Users to protect, manage, and monetize their novel creations on a global scale.</p>
              </div>
          </div>
    { isMobile &&
            <div className="tp-fea-img col-12 d-lg-block tpfadeLeft" style={{  width:  "200%", height: "auto", marginTop:"-10px", position: "relative", right: "0%"}}>
       <img src={tabImage} alt="" className='ml-20 mt-0 mb-30 mr-20' style={{ width: "100%", position: "relative", right: "15%", textAlign: "justify" }}/>
     </div>
          }
          </div>
          </div>
  );
};

export default WhatWeDo; 