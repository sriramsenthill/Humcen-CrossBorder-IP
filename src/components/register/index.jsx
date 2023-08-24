import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
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
      <HeaderFour home={true} />
      <div style={{paddingBottom: "150px"}}></div>
        <RegisterArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default Register;