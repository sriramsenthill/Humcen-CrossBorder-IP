import React from 'react';
import Brands from '../../common/brands';

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-130 pb-130 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-title-four text-center pb-60">
              <h4 className="tp-brand-title" style={{fontSize:'33px'}}>Our <span style={{background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',}}>Clients</span></h4>
            </div>
          </div>
        </div>
        <div className="tp-brand-slider-section">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default BrandArea;