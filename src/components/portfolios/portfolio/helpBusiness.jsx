import React from 'react';
import Link from 'next/link';

const innovatorsList=[
    {
        id:0,
        text:'Ensure the security of your intellectual property creations with simplicity. Our platform streamlines the process of protecting your valuable assets, providing you with confidence.',
    },
]

const businessList=[
    {
        id:0,
        text:'Effortlessly organize and manage your business IP assets. Make strategic choices to amplify the value of your innovations using our intuitive tools.'
    },
]

const ipList=[
    {
        id:0,
        text:'Unlock the latent value of your intellectual property. Our platform introduces innovative avenues for monetizing your IP, expanding your revenue opportunities.'
    },
]

const helpBusiness= () => {
    return (
      <>
        <div className="ac-chose-area mb-130">
          <div className="container">
            <div className="row">
            <div className="tp-service-section-box text-center pb-60"> 
              <h2>Empower Businesses in Shaping a Resilient IP Future<br/>
              <span className='tp-title-sm'style={{fontSize:'48px'}}>Start amplifying your IP potential today.</span></h2>
            </div>
            <div className='d-flex m-0' style={{width:'100%'}}>
              <ChoseItem duration='.3s' delay='.5s' icon='flaticon-group' title={<>Fortify Your Business's IP Assets </>}
                text={'24+ Team Member'} listItems={innovatorsList}/>
              <ChoseItem duration='.5s' delay='.7s' item_num={'tpchosebox-three'} color="fea-color-5" icon='fas fa-star' title={<>Optimize Your IP Portfolio Management </>} text={'100% Client Satisfied'} listItems={businessList} />
              <ChoseItem duration='.7s' delay='.9s' item_num={'tpchosebox-two'} color="fea-color-4" icon='flaticon-web' title={<>Monetize Your Business's IP</>} text={'65.04 k Reach'} listItems={ipList} />
          </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
export default helpBusiness;

const ChoseItem = ({ duration, delay, item_num,image,listItems, title, text, color }) => {

    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp mr-120"
        data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tp-chose-item mb-30 d-flex justify-content-center" style={{width:'120%'}}>
          <div className={`tpchosebox ${item_num && item_num}`} style={{height:'30vw'}}>
            <div className="tpchosebox__content">
              <h4 style={{textAlign:'center'}}>
                  <a className='tp-title-sm' style={{fontSize:'35px',cursor:'pointer',}}>{title}</a>
              </h4>
              </div>
              <div>
                {listItems.map(item => (
             <p key={item.id} style={{ listStyle: 'disc',fontSize:'21px',margin:'15px',textAlign:'center' }}>{item.text}</p>
            ))}
             </div>
            </div>
          </div>
          </div>
    );
  }