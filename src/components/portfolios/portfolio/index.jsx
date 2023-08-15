import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioArea from './portfolio-area';
import BreadcrumbCreators from '../../common/breadcrumb/breadcrumpcreators';
import HelpCreators from './helpcreators';
import PlatformCreators from './platformcreators';
import GameChanger from './gamechanger';
import BusinessCreators from './business';
import NewsLetter from '../../homes/home-4/news-letter';
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
     <NewsLetter/>
     <FooterThree/>
    </Wrapper>
  );
};

export default Portfolio;