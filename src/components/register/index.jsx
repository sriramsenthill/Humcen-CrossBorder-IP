import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import RegisterArea from './register-area';


const Register = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <div style={{
        position: "relative",
        top: "150px",
        paddingBottom: "150px",
      }}>
        <RegisterArea/>
      </div>
      <FooterThree />
    </Wrapper>
  );
};

export default Register;