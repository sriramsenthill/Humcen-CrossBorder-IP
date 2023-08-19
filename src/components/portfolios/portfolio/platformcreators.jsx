import React from 'react';
import {useState, useEffect} from "react";
import { FeatureOne, FeatureThree, FeatureTwo, } from '../../../svg';
import FeatureOnes from '../../../svg/feature-one';
import FeatureTwos from '../../../svg/feature-two';
import FeatureThrees from '../../../svg/feature-three';
  const image3 = "/assets/img/feature/WhatsApp Image 2023-08-11 at 12.25.42.jpg";

const PlatformCreators = () => {
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
    <div className="tp-feature-arae pt-20 pb-100 p-relative">
      <div className="ce-chose-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
     <div className="tp-fea-img col-12 d-lg-block" style={{ marginLeft: "-308px" , width: isMobile ? "390px" : "148%", height:"auto", marginTop:"-10px", position: "relative", left: isMobile ? "80%" : "35%"}}>
    <img src={image3} alt="" className={`${isMobile ? "mt-20" : "mt-130"} ${isMobile && "mr-150"}`} />
  </div>
     </div>

          <div className={`col-xl-6 col-lg-6  wow tpfadeRight ${isMobile ? "ml-0" : "ml-110"} ml-lg-0 mr-lg-50`} data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h2 className="tp-title-sm pb-40" style={{fontSize: isMobile ? "30px" :'39px', textAlign: "justify", maxWidth: widthNow}}>The HumCen.io Platform for <span style={{  background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',fontSize:'40px'}}>Creators</span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                <ul>
                    <li style={{ listStyle: 'disc',fontSize:'24px',margin:'15px',marginLeft:'25px' }}>Intuitive Dashboard</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Cross border IP in a click</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Blockchain-Powered Security</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>Real-time Progress Tracking</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>IP Monetization Tools</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px'}}>Licensing Opportunities</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>In-depth Analytics Insights</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px' }}>User-Friendly Process</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px', margin:'15px',marginLeft:'25px'}}>Budget categorizing</li>
                    <li style={{ listStyle: 'disc',fontSize:'24px',margin:'15px',marginLeft:'25px' }}>Personalized Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformCreators;