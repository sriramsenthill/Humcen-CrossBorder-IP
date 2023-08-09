import React from 'react';
import Link from 'next/link';


const HelpServices= () => {
    return (
      <>
        <div className="ac-chose-area mb-130 ac-chose-bg2">
          <div className="container">
            <div className="row">
            <div className="tp-service-section-box text-center pb-60"> 
              <h2 className="tp-title-sm">Our platform solves major stakeholders challenges in <br/>
              Cross Border IP Industry</h2>
            </div>
            <div className='d-flex m-0' style={{width:'100%'}}>
              <ChoseItem duration='.3s' delay='.5s' icon='flaticon-group' title={<>Innovators</>}
                text={'24+ Team Member'}/>
              <ChoseItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' title={<>Businesses</>} text={'100% Client Satisfied'}/>
              <ChoseItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' title={<>IP Professionals</>} text={'65.04 k Reach'} />
          </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
export default HelpServices;

const ChoseItem = ({ duration, delay, item_num,icon, title, text, color }) => {
    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp mr-120"
        data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tp-chose-item mb-30" style={{width:'130%'}}>
          <div className={`tpchosebox ${item_num && item_num} d-flex justify-content-center`} style={{height:'35vw'}}>
            <div className={`tpchosebox__icon ${color && color} mb-30`}>
            
            </div>
            <div className="tpchosebox__content">
              <h4>
                <Link href="/service-details">
                  <a className='tp-title-sm' style={{fontSize:'35px'}}>{title}</a>
                </Link>
              </h4>
              <p>{text}</p>
            </div>
          </div>
          </div>
        </div>
    )
  }