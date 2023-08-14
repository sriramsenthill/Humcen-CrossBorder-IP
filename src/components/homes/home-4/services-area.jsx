import Link from 'next/link';
import React, { useState } from 'react';
import { services_data } from '../../../data';
import { HighlightTwo } from '../../../svg';

const services_items = services_data.filter(ser => ser.home_4);

const ServicesArea = () => {
  const initialServicesToShow = 7;
  const [showMoreServices, setShowMoreServices] = useState(false);

  const displayedServices = showMoreServices ? services_data : services_data.slice(0, initialServicesToShow);

  const toggleMoreServices = () => {
    setShowMoreServices(!showMoreServices);
  };

  return (
    <div className="tp-service-area pb-90 grey-bg mt-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="tp-service-section-box text-center pb-60">
              <h5 className="tp-subtitle pb-10 mt-50">Our Services</h5>
              <h2 className="tp-title-sm" style={{fontSize:'48px'}}>Streamlining Your Cross-Border IP<br/>Journey with us!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {displayedServices.map((service) => {
            const { id, duration, delay, img, title, border_effect, text_1 } = service;
            return (
              <div key={id} className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration={duration} data-wow-delay={delay}>
                <div className={`tp-sv-border-effect ${border_effect}`}>
                  <div className={`tp-service-item-four sv-color-${id} mb-30`} style={{ height: '31vw' }}>
                    <div className="tp-service-item-four__img mb-40">
                      <img src={img} alt={title} />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        <a>{title}</a>
                      </h3>
                    </div>
                    <div className="tp-service-item-four__text text-justify">
                      <p>{text_1}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={`col-xl-3 col-lg-4 col-md-6 wow tpfadeUp ${showMoreServices ? 'd-none' : ''}`}   data-wow-duration="1.1s" data-wow-delay="1.3s">
            
              <div className="sv-color-eight mb-30" style={{ height: '31vw' }}>
                <div className="sv-color-eight__title text-center d-flex flex-column align-items-center justify-content-center h-100">
                  <h3 className="tp-sv-sm-title">
                    <a onClick={toggleMoreServices} style={{cursor:'pointer'}}>
                      <i className="fal fa-long-arrow-down"></i>{" "}
                    </a>
                  </h3>
                 <p className='tp-sv-sm-title'>{showMoreServices ? "Show Less Services" : "More Services"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
