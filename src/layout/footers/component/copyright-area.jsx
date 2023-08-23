import React from 'react';

const CopyrightArea = ({copy_right_text='',conditions=[],color=''}) => {
  return (
    <div className="tp-copyright-area">
    <div className="container">
      <div className="copyright-border pt-40 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="tp-copyright-left text-lg-start text-start text-md-center">
              <p className={`${color?'text-black':''}`} style={{
                textAlign: "center",
              }}>{copy_right_text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CopyrightArea;