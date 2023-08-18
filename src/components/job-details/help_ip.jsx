import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const innovatorsList=[
    {
        id:0,
        text: "Master IP protection effortlessly. Our platform simplifies the process of securing IP rights, building your confidence."
    },
]

const businessList=[
    {
        id:0,
        text: "Effortlessly oversee IP applications and deadlines. Track progress and make informed decisions to maximize IP value with our intuitive tools."
    },
]

const ipList=[
    {
        id:0,
        text: "Leverage your IP prowess for diverse income streams. Our platform offers innovative ways to monetize IP expertise, enhancing your earnings."
    },
]

const HelpIP= () => {
    return (
      <>
        <div className="ac-chose-area ac-chose-bg3 mb-130">
          <div className="container">
            <div className="row">
            <div className="tp-service-section-box text-center pb-60"> 
              <h2>Empower IP Professionals to shape a Resilient IP Future <br />
              <span className='tp-title-sm'style={{fontSize:'48px', background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',}}>Elevate your IP career starting today.</span></h2>
            </div>
            <div className='row' style={{width:'100%', textAlign: "center"}}>
              <ResponsiveItem duration='.3s' delay='.5s' icon='flaticon-group' image={'/assets/img/about/exp.png'} title={<>Boost Your IP Expertise</>}
                text={'24+ Team Member'} listItems={innovatorsList}/>
              <ResponsiveItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' image={'/assets/img/about/portf.png'} title={<>Fine-tuned IP portfolio control </>} text={'100% Client Satisfied'} listItems={businessList} />
              <ResponsiveItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' image={'/assets/img/about/Monetize.png'} title={<>Monetize IP Strategies </>} text={'65.04 k Reach'} listItems={ipList} />
          </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
export default HelpIP;

const ResponsiveItem = ({ duration, delay, item_num,image,listItems, title, text, color }) => {
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
    <div
    className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp"
    style={{
      textAlign: "justify",
    }}
    data-wow-duration={duration}
    data-wow-delay={delay}
  >
    <div style={{ marginBottom: "50px", position: "relative", right: isMobile ? "10%" : 0}}>
      <div
        className="tp-service-item-four mb-20"
        style={{
          height: isMobile ? "550px" : "500px", 
          width: isMobile ? "340px" : "400px",
        }}
      >
        <div className="tp-service-item-four__img mb-40 mt-0 ml-90 bg-white" style={{textAlign: "right"}}>
          <img
            src={image}
            alt={title}
            style={{width:'88px'}}
          />
        </div>
        <div className="tp-service-item-four__title">
        <h4 style={{textAlign:'center'}}>
                  <a className='tp-title-sm' style={{fontSize:'35px',cursor:'pointer',}}>{title}</a>
              </h4>
        </div>
        <div className="tp-service-item-four__text" style={{textAlign:'left'}}>
        <ul>
                {listItems.map(item => (
             <li key={item.id} style={{ listStyle: 'disc',fontSize:'21px',margin:'15px',textAlign:'justify'}}>{item.text}</li>
            ))}
             </ul>
        </div>
      </div>
    </div>
  </div>
  )

}


const ChoseItem = ({ duration, delay, item_num,image,listItems, title, text, color }) => {

    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp mr-120"
        data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tp-chose-item mb-30 d-flex justify-content-center" style={{width:'120%'}}>
          <div className={`tpchosebox ${item_num && item_num}`} style={{height:'560px'}}>
          <div className={`tpchosebox__icon ${color && color} mb-30`} style={{textAlign:'center'}}>
             <img src={image} alt="" style={{width:'88px'}}/>
            </div>
            <div className="tpchosebox__content">
              <h4 style={{textAlign:'center'}}>
                  <a className='tp-title-sm' style={{fontSize:'35px',cursor:'pointer',}}>{title}</a>
              </h4>
              </div>
              <div>
                {listItems.map(item => (
             <p key={item.id} style={{ listStyle: 'disc',fontSize:'21px',margin:'15px',textAlign:'justify' }}>{item.text}</p>
            ))}
             </div>
            </div>
          </div>
          </div>
    );
  }