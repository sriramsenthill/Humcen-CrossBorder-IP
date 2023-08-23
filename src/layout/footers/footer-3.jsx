import Link from 'next/link';
import React from 'react';
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';

const footer_contents = {
  logo: '/assets/img/logo/logo-white.png',
  widget_desc: 'HumCen.io is a Blockchain-driven Cross-Border IP aggregator platform that empowers IP journey worldwide. Innovators and Businesses can get expert IP assistance, secure IP transactions, and strategic portfolio management, enabling Users to protect, manage, and monetize their novel creations on a global scale.',
  footer_widgets: [
    {
      padd: 'pl-20',
      title: 'Get in Touch',
      widget_lists: [ 'Contact Us',]
    },
  ],
  subscribe_title: 'Subscribe Newslatter',
  subscribe_text: 'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo',
  copy_right_text: <>All Rights Reserved</>,
  conditions: []
}

const { conditions, copy_right_text, footer_widgets, logo, widget_desc, subscribe_text, subscribe_title } = footer_contents;

const FooterThree = ({ home_four = false }) => {
  return (
    <React.Fragment>
      <footer>
        <div className="tp-footer-area black-bg pt-30 pb-20">
          <div className="container">
            <div className="row wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="col-xl-6 col-lg-4 col-md-4">
                <div className="tp-footer-widget">
                  {!home_four && <div className="tp-footer-widget__logo mb-30">
                    <Link href="/">
                      <a><img src={logo} alt="" /></a>
                    </Link>
                  </div>}
                  {home_four && <div className="tp-footer-widget__title mb-30">
                    <h3 className="footer-title">About Us</h3>
                  </div>}
                  <div className="tp-footer-widget__text mb-30">
                    <p>{widget_desc}</p>
                  </div>
            
                </div>
              </div>
              {footer_widgets.map((w, i) => {
                const { title, widget_lists, w_class, padd } = w;
                return <div key={i} className={`col-xl-6 col-lg-4 col-md-4 ${w_class ? w_class : ''}`}>
                  <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{title}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {widget_lists.map((l, i) =>  <Link key={i} href="/register"><li  style={{cursor:'pointer'}}>{l}</li></Link>)}
                      </ul>
                    </div>
                  </div>
                </div>
              })}
            
             
            </div>
          </div>

          {/* CopyrightArea start */}
          <CopyrightArea copy_right_text={copy_right_text} conditions={conditions} />
          {/* CopyrightArea end */}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterThree;

