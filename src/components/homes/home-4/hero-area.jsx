import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HighlightTwo } from '../../../svg';
import VideoModal from '../../common/modals/modal-video';

const hero_contents = {
  shapes: [{ img: 'hero-shape-4' }, { num: '-two', img: 'hero-shape-4.1' }],
  text: 'Redefines how the Intellectual Property is protected, managed and monetized on a global scale.',
  btn_text: 'Get in touch',
  video_title: 'Behind the scenes',
  video_id: 'LJbkLdtEW00',
  hero_img: '/assets/img/hero/hero-5.png'
}

const { btn_text, hero_img, shapes,text, title } = hero_contents;

const HeroArea = () => {
  return (
    <React.Fragment>
      <div className="tp-hero-area-two  pt-130 p-relative fix">
      <div className="tp-hero-yellow-shape d-none d-lg-block" style={{background: "linear-gradient(to right, #02E1B9, #00ACF6)",
}}></div>
          {shapes.map((s, i) => <div key={i} className={`ce-hero-shape${s.num ? s.num : ''} d-none d-lg-block`}>
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-section-box tp-hero-section-box-four pt-120 pb-140">
              <h3 className="tp-hero-bd-title  wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s" style={{background: 'linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)',fontSize:"67px",color: 'transparent',WebkitBackgroundClip: 'text',}}>Cross-Border <br/>
 IP Aggregator,and beyond</h3>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">{text}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
              
  <button className="tp-btn mr-55" style={{ backgroundColor: "#00002B" }}>{btn_text}</button>

                 
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration=".7s" data-wow-delay=".9s" style={{ marginTop: "-20px" }}>
  <div className="tp-hero-right-img-four pt-90 col-12 d-none d-lg-block">
    <img src={hero_img} alt="" style={{ maxWidth: "170%", height: "auto", marginTop: "-95px", marginLeft: "-300px" }} />
  </div>
</div>

          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default HeroArea;