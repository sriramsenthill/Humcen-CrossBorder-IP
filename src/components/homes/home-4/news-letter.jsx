import React from 'react';

const news_letter_contents = {
  bg_img: '/assets/img/news/news-bg.jpg',
  btn_text: 'Subscribe',
  img: '/assets/img/news/news-3.png',
}


const { bg_img, btn_text, img, subtitle, title } = news_letter_contents;

const NewsLetter = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-130 pb-130 mb-55 mr-25 ml-25" 
    style={{ backgroundImage:`url('https://teamup.money/wp-content/uploads/2022/08/team-cta.jpg')`,borderRadius:'28px'}} >
      <div className="container">
        <div className="row align-items-center wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
          <div className="col-12">
            <div className="tp-news-sub-wrapper"style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="tp-news-letter-section-box">
              <h2 className="pb-55" style={{ textAlign: 'center',color:'#ffffff' }}>
            <span style={{fontSize:'65px',fontWeight:'600',    fontFamily: "Poppins,sans-serif",marginBottom:'0'}}>Ready to</span><br />
           <span className='tp-title-sm' style={{color:'#ffffff',fontSize:'75px',fontWeight:'600', fontFamily: "Poppins,sans-serif",marginBottom:'0'}}>Elevate Your <span style={{fontStyle:'italic'}}>IP Strategy?</span></span> <br />
          <p style={{color:'#f1f1f1',marginTop:'30px',fontSize:'32px'}}>
               If you're ready to simplify global IP protection, <br/> management, and monetization, connect with our experts for a <br/> personalized consultation.
          </p>
       </h2>
              </div>
              <div className="tp-news-button p-relative ml-190">
               
                  <button className="tp-submit-button tp-btn-yellow" type="submit" style={{backgroundColor:'#00002B',color:'#ffffff',width:'210px',margin: '0 auto'}}>Sign Up Today</button>
              </div>
            </div>
          </div>

        </div>
      </div>
 
    </div>
  );
};

export default NewsLetter;