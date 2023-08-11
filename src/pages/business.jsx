import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../layout';
import { animationCreate } from '../utils/utils';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import Breadcrumpbusiness from '../components/common/breadcrumb/Breadcrumpbusiness';
import PortfolioArea from '../components/portfolios/portfolio/portfolio-area';
import HelpBusiness from '../components/portfolios/portfolio/helpBusiness';
import PlatformCreators from '../components/portfolios/portfolio/platformcreators';
import GameChanger from '../components/portfolios/portfolio/gamechanger';
import BusinessCreators from '../components/portfolios/portfolio/business';

const business = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
     <HeaderSix/>
     <Breadcrumpbusiness/>
     <HelpBusiness/>
     <PlatformCreators/>
     <GameChanger/>
     <BusinessCreators/>
     <FooterThree/>
    </Wrapper>
  );
};

export default business;