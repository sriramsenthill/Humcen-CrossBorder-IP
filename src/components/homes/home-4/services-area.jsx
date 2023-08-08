import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';
import { HighlightTwo } from '../../../svg';

const services_items = services_data.filter(ser => ser.home_4);

const ServicesArea = () => {
  return (
    <div className="tp-service-area pb-90 grey-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="tp-service-section-box text-center pb-60">
              <h5 className="tp-subtitle pb-10">Our Services</h5>
              <h2 className="tp-title-sm">Managing you business with our
                <span className="tp-section-highlight">
                  best service
                  <HighlightTwo />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services_data.map((service) => {
          const { id, duration, delay, img, title, border_effect, text_1 } = service;
          return (
            <div key={id} className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration={duration} data-wow-delay={delay}>
              <div className={`tp-sv-border-effect ${border_effect}`}>
                <div className={`tp-service-item-four sv-color-${id} mb-30`}>
                  <div className="tp-service-item-four__img  mb-40">
                    <img src={img} alt={title} />
                  </div>
                  <div className="tp-service-item-four__title">
                    <h3 className="tp-sv-sm-title">
                      <a>{title}</a>
                    </h3>
                  </div>
                  <div className="tp-service-item-four__text">
                    <p>{text_1}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
          <div className="col-xl-3 col-lg-4 col-md-6  wow tpfadeUp" data-wow-duration="1.1s" data-wow-delay="1.3s">
            <div className="sv-color-eight  mb-30">
              <div className="sv-color-eight__title text-center">
                <h3 className="tp-sv-sm-title"><a href="#">More Services</a></h3>
                <Link href={`/service-1`}>
                  <a><i className="fal fa-long-arrow-up"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;