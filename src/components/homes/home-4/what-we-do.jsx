import React from 'react';


const tabImage = "/assets/img/feature/fea-1 copy.png";

const WhatWeDo = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
          <div className="tp-fea-img col-12" style={{ marginLeft: "-308px" , width: "138%", height: "auto", marginTop:"-10px"}}>
    <img src={tabImage} alt="" className='ml-110 mt-140' />
  </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                 <h3 className="tp-title-sm service-details-space center mb-0">WHAT WE DO</h3>
                <p className="pb-15 mt-50">HumCen.io is a Blockchain-driven Cross-Border IP aggregator platform that empowers IP journey worldwide. Innovators and Businesses can get expert IP assistance, secure IP transactions, and strategic portfolio management, enabling Users to protect, manage, and monetize their novel creations on a global scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;