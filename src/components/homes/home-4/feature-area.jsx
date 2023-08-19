import React from 'react';
import { FeatureOne, FeatureThree, FeatureTwo, } from '../../../svg';
import { useState, useEffect } from 'react';
import FeatureOnes from '../../../svg/feature-one';
import FeatureTwos from '../../../svg/feature-two';
import FeatureThrees from '../../../svg/feature-three';
const image3 = "/assets/img/feature/tab_2.png";

const feature_contents = {
  feature_img:'/assets/img/feature/tab_1.png',
  subtitle:'Why Choose us',
  feature_lists:[
    {
      id:1,
      icon:<FeatureOne/>,
      title:'Safeguard Your Creation Worldwide',
      subtitle:<>Protect your IP globally from your desktop, ensuring borderless security for your valuable creations.</>,
    },
    {
      id:2,
      icon:<FeatureTwo/>,
      title:'Global IP Professionals Network',
      subtitle:<> Connect with skilled Global Attorneys for Seamless IP Protection.</>,
    },
    {
      id:3,
      icon:<FeatureThree/>,
      title:'IP Portfolio Management',
      subtitle:<>Organize and maximize IP assets for strategic growth, ensuring value and efficiency in IP management.</>,
    },
  ]
}

const feature_lists_2=[
  {
    id:1,
    icon:<FeatureOnes/>,
    title:'NFT IP Marketplace',
    subtitle:<>Empower your IP with NFT tech for global monetization, unlocking new avenues for IP value and reach.</>,
  },
  {
    id:2,
    icon:<FeatureTwos/>,
    title:'Blockchain Security',
    subtitle:<>Ensure trust and transparency in cross-border IP transactions, leveraging the power of blockchain technology.</>,
  },
  {
    id:3,
    icon:<FeatureThrees/>,
    title:'Bulk Monetization Made Easy',
    subtitle:<>Monetize large IP volumes in one shot and tap into lucrative global markets with seamless ease.</>,
  },
]

const {feature_img,feature_lists,highlight_text,subtitle,title} = feature_contents;

const FeatureArea = () => {
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
    <div className={`tp-feature-arae ${isMobile ? "pt-35" : "pt-130"} ${isMobile ? "pb-20" : "pb-100"} p-relative`}>
      <div className="ce-chose-shape d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
  <div className="tp-fea-img col-12 d-lg-block" style={{ marginLeft: "-308px" , width: "132%", height: "auto", marginTop:"-10px"}}>
    <img src={feature_img} alt="" className={`ml-110 ${isMobile ? "mt-0" : "mt-140"}`} style={{width: isMobile && "390px",  position: "relative",
    left: isMobile ? "80%" : "55%",
    transform: "translateX(-50%)"}} />
  </div>
</div>

          <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h5 className="tp-subtitle pb-10">{subtitle}</h5>
                <h2 className="tp-title-sm pb-40" style={{fontSize:'42px'}}>Global IP Empowerment Platform: <span style={{background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',}} >Protect, Manage and Monetize!</span>
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="240" height="11" viewBox="0 0 240 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                {feature_lists.map((list,i) => {
                  const {icon,id,subtitle,title} = list;
                  return <div key={id} className="tp-feature-list d-flex">
                  <div className={`tp-feature-list__icon-img fea-color-${i+1} mr-25`}>
                    {icon}
                  </div>
                  <div className="tp-feature-list__content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
                })}
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 mt-120 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="fea-wrapper-main">
                {feature_lists_2.map((list,i) => {
                  const {icon,id,subtitle,title} = list;
                  return <div key={id} className="tp-feature-list d-flex">
                  <div className={`tp-feature-list__icon-img fea-color-${i+1} mr-25`}>
                    {icon}
                  </div>
                  <div className="tp-feature-list__content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
                })}
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 ml-220 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
      <div className="tp-fea-img col-12 d-lg-block" style={{  width: "120%", height: "auto", marginTop:"-10px"}}>
    <img src={image3} alt="" className={`mr-120 ${ isMobile ? "mt-0" : "mt-90"}`} style={{width: isMobile && "390px",  position: "relative",
    left: isMobile ? "42%" : "45%",
    transform: "translateX(-50%)"}}/>
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default FeatureArea;