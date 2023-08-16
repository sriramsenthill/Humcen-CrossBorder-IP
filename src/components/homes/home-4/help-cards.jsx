import React from 'react';
import Link from 'next/link';

const innovatorsList=[
    {
        id:0,
        text:'Expert IP Guidance',
    },
    {
        id:1,
        text:'Cost-Effective Solutions'
    },
    {
        id:3,
        text:'Streamlined Monetization'
    }
]

const businessList=[
    {
        id:0,
        text:'Bulk Orders in One Shot'
    },
    {
        id:1,
        text:'Efficient IP Management'
    },
    {
        id:2,
        text:'Access to Global IP Assets'
    }
]

const ipList=[
    {
        id:0,
        text:'Beyond local market scope'
    },
    {
        id:1,
        text:'Work from Anywhere'
    },
    {
        id:2,
        text:'Dynamic Earnings Potential'
    }
]
//col-xl-3 col-lg-4 col-md-6
//col-12 col-md-6 col-xl-3 col-lg-6
const HelpServices= () => {
    return (
      <>
        <div className="ac-chose-area mb-130 ac-chose-bg2">
          <div className="container">
            <div className="row">
            <div className="tp-service-section-box text-center pb-60"> 
              <h2>Our platform solves major stakeholders challenges in <br/>
              <span className='tp-title-sm'style={{fontSize:'48px',background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',color: 'transparent',WebkitBackgroundClip: 'text',}}>Cross Border IP Industry</span></h2>
            </div>
            <div className='d-flex m-0' style={{width:'100%'}}>
              <ChoseItem duration='.3s' delay='.5s' icon='flaticon-group' title={<>Creators</>}
                text={'24+ Team Member'} listItems={innovatorsList} image={'/assets/img/about/project-management_1087840.png'}/>
              <ChoseItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' title={<>Businesses</>} text={'100% Client Satisfied'} listItems={businessList} image={'/assets/img/about/business_3281412.png'}/>
              <ChoseItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' title={<>IP Professionals</>} text={'65.04 k Reach'} listItems={ipList} image={'/assets/img/about/leadership_1462437.png'}/>
          </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
export default HelpServices;

const ChoseItem = ({ duration, delay, item_num,image,listItems, title, text, color }) => {

    return (
     <div className="col-12 col-md-6 col-xl-3 col-lg-6 wow tpfadeUp mr-120"
      data-wow-duration={duration}
     data-wow-delay={delay}>
        <div className="tp-chose-item mb-30 d-flex justify-content-center" style={{width:'120%'}}>
          <div className={`tpchosebox ${item_num && item_num}`} style={{height:'100%'}}>
            <div className={`tpchosebox__icon ${color && color} mb-30`} style={{textAlign:'center'}}>
             <img src={image} alt="" style={{width:'88px'}}/>
            </div>
            <div className="tpchosebox__content">
              <h4 style={{textAlign:'center'}}>
                  <a className='tp-title-sm' style={{fontSize:'35px',cursor:'pointer',}}>{title}</a>
              </h4>
              </div>
              <ul>
                {listItems.map(item => (
             <li key={item.id} style={{ listStyle: 'disc',fontSize:'21px',margin:'15px',textAlign:'justify'}}>{item.text}</li>
            ))}
             </ul>
            </div>
          </div>
          </div>

    );
  }