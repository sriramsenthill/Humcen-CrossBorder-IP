import React from 'react';
import { FeatureOne, FeatureThree, FeatureTwo } from '../../../svg';

  const image3 = "/assets/img/feature/fea-3.png";

const feature_contents = {
  feature_img:'/assets/img/feature/fea-1.png',
  subtitle:'Why Choose us',
  title:'Global IP Empowerment Platform: Protect, Manage and Monetize!',
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
    icon:<FeatureOne/>,
    title:'NFT IP Marketplace',
    subtitle:<>Empower your IP with NFT tech for global monetization, unlocking new avenues for IP value and reach.</>,
  },
  {
    id:2,
    icon:<FeatureTwo/>,
    title:'Blockchain Security',
    subtitle:<>Ensure trust and transparency in cross-border IP transactions, leveraging the power of blockchain technology.</>,
  },
  {
    id:3,
    icon:<FeatureThree/>,
    title:'Bulk Monetization Made Easy',
    subtitle:<>Monetize large IP volumes in one shot and tap into lucrative global markets with seamless ease.</>,
  },
]

const {feature_img,feature_lists,highlight_text,subtitle,title} = feature_contents;

const FeatureArea = () => {
  return (
    <div className="tp-feature-arae pt-130 pb-100 p-relative">
      <div className="ce-chose-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s" style={{ paddingRight: "20px" }}>
  <div className="tp-fea-img col-12 d-none d-lg-block" style={{ marginLeft: "-418px" , width: "170%", height: "auto", marginTop:"-100px"}}>
    <img src={feature_img} alt=""  />
  </div>
</div>

          <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h5 className="tp-subtitle pb-10">{subtitle}</h5>
                <h2 className="tp-title-sm pb-40">{title}
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
  <div className="tp-fea-img col-12 d-none d-lg-block" style={{  width: "130%", height: "auto", marginTop:"-100px"}}>
    <img src={image3} alt="" className="ml-10 mt-85" />
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default FeatureArea;