import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioArea from './portfolio-area';
import BreadcrumbCreators from '../../common/breadcrumb/breadcrumpcreators';
import HelpCreators from './helpcreators';
import PlatformCreators from './platformcreators';
import GameChanger from './gamechanger';
import BusinessCreators from './business';
const Portfolio = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
     <HeaderSix/>
     <BreadcrumbCreators/>
     <HelpCreators/>
     <PlatformCreators/>
     <GameChanger/>
     <BusinessCreators/>
     <FooterThree/>
    </Wrapper>
  );
};

export default Portfolio;