import Link from 'next/link';
import {useState, useEffect} from "react";
import React from 'react';

const news_letter_contents = {
  bg_img: '/assets/img/news/news-bg.jpg',
  btn_text: 'Subscribe',
  img: '/assets/img/news/news-3.png',
}


const { bg_img, btn_text, img, subtitle, title } = news_letter_contents;

const NewsLetter = () => {
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
    <div className="tp-news-letter-area tp-news-letter-bg pt-100 pb-50 mb-55 mx-auto mt-55" style={{ backgroundImage: 'url(assets/img/brand/newbg.png)', borderRadius: '28px', maxWidth: '850px', width: isMobile && "320px", height: isMobile && "525px" }}>
      <div className="container">
        <div className="row align-items-center wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
          <div className="col-12 text-center">
            <div className="tp-news-sub-wrapper">
              <h2 className="pb-3" style={{ textAlign: 'center', color: '#ffffff', fontSize: isMobile ? "20px" : '30px', position: "relative", bottom: isMobile && "30px"}}>
                <span style={{ fontSize: isMobile ? "30px" : '40px', fontWeight: '600', fontFamily: "Poppins, sans-serif", marginBottom: '0' }}>Ready to</span><br />
                <span className='tp-title-sm' style={{ color: '#ffffff', fontSize: isMobile ? "38px" : '45px', fontWeight: '600', fontFamily: "Poppins, sans-serif", marginBottom: "0" }}>Elevate Your <span style={{ fontStyle: 'italic' }}>IP Strategy?</span></span> <br />
                <p style={{ color: '#f1f1f1', marginTop: '15px', fontSize: isMobile ? "18px" : '20px', position: "relative", top: isMobile && "25px" }}>
                  If you are ready to simplify global IP protection, <br /> management, and monetization, connect with our experts for a <br /> personalized consultation.
                </p>
              </h2>
              <br/>
              <div className="tp-news-button p-relative mx-auto" >
              <Link href="/register">
              <button className="tp-btn mr-55" style={{ backgroundColor: "#ffffff",color:'#232323', position: "relative",
    left: isMobile ? "43%" : "2%",
    bottom: isMobile && "20px",
    transform: isMobile && "translateX(-50%)" }}>Get In Touch</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
