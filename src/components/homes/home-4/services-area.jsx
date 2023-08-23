import Link from "next/link";
import React, { useState } from "react";
import { services_data } from "../../../data";
import { HighlightTwo } from "../../../svg";

const services_items = services_data.filter((ser) => ser.home_4);

const ServicesArea = () => {
  const initialServicesToShow = 7;
  const [showMoreServices, setShowMoreServices] = useState(false);

  const displayedServices = showMoreServices
    ? services_data
    : services_data.slice(0, initialServicesToShow);

  const toggleMoreServices = () => {
    setShowMoreServices(!showMoreServices);
  };

  return (
    <div className="tp-service-area pb-90 grey-bg mt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="tp-service-section-box text-center pb-60">
              <h5 className="tp-subtitle pb-10 mt-50">Our Services</h5>
              <h2 className="tp-title-sm" style={{ fontSize: "48px" }}>
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Streamlining
                </span>{" "}
                Your Cross-Border IP
                <br />
                Journey with us!
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {displayedServices.map((service) => {
            const { id, duration, delay, img, title, border_effect, text_1 } =
              service;
            return (
              <div
                key={id}
                className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp m-0"
                data-wow-duration={duration}
                data-wow-delay={delay}
              >
                <div className="tp-sv-border-effect">
                  <div
                    className="tp-service-item-four mb-20"
                    style={{ height: "420px" }}
                  >
                    <div class="tp-service-item-four__img mb-40 mt-0 bg-white ">
                      <img
                        src={img}
                        alt={title}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title" style={{fontWeight:"bold "}}>
                        <a>{title}</a>
                      </h3>
                    </div>
                    <div className="tp-service-item-four__text" style={{textAlign:'left'}}>
                      <p style={{ fontSize: "15px",color:'#333333' }}>{text_1}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className={`col-xl-3 col-lg-4 col-md-6 wow tpfadeUp ${
              showMoreServices ? "d-none" : ""
            }`}
            data-wow-duration="0.5s"
            data-wow-delay="0.7s"
          >
            <div className="sv-color-eight mb-30" style={{ height: "420px" }}>
              <div className="sv-color-eight__title text-center d-flex flex-column align-items-center justify-content-center h-100">
                <h3 className="tp-sv-sm-title">
                  <a onClick={toggleMoreServices} style={{ cursor: "pointer" }}>
                    <i className="fal fa-long-arrow-down" style={{background:
                      "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
                    color: "transparent",
                    WebkitBackgroundClip: "text",}}></i>{" "}
                  </a>
                </h3>
                <p className="tp-sv-sm-title">
                  {showMoreServices ? "Show Less Services" : "More Services"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
