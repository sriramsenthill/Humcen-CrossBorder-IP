import React from 'react';


const tabImage = "/assets/img/feature/fea-1 copy.png";

const WhatWeDo = () => {
  return (
       <div className="container">
        <div className="row">
        <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
      <div className="tp-fea-img col-12 d-none d-lg-block" style={{ marginLeft: "-308px" , width: "170%", height: "auto", marginTop:"-10px"}}>
       <img src={tabImage} alt="" className='ml-40 mt-0 mb-30' />
     </div>
      </div>
          <div className="col-xl-6 col-lg-6 ml-100 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
          <div className="sd-service-details-paragraph">
                 <h3 className="tp-title-sm service-details-space center mb-0 mt-140">WHAT WE DO</h3>
                <p className="pb-15 mt-40" style={{textAlign:"justify"}}>HumCen.io is a Blockchain-driven Cross-Border IP aggregator platform that empowers IP journey worldwide. Innovators and Businesses can get expert IP assistance, secure IP transactions, and strategic portfolio management, enabling Users to protect, manage, and monetize their novel creations on a global scale.</p>
              </div>
          </div>
          </div>
          </div>
  );
};

export default WhatWeDo;