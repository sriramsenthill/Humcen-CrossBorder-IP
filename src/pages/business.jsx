import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../layout';
import { animationCreate } from '../utils/utils';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import Breadcrumpbusiness from '../components/common/breadcrumb/Breadcrumpbusiness';
import PortfolioArea from '../components/portfolios/portfolio/portfolio-area';
import HelpBusiness from '../components/portfolios/portfolio/helpBusiness';
import PlatformBusiness from '../components/business/platform_business';
import GameChangerBusiness from '../components/business/gamechanger_business';
import GameChanger from '../components/portfolios/portfolio/gamechanger';
import BusinessCreators from '../components/portfolios/portfolio/business';
import NewsLetter from '../components/homes/home-4/news-letter';
import SEO from '../components/seo';
const Business = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
     <SEO pageTitle={'Humcen - Cross Border IP Aggregator'} />
      <HeaderFour />
      <Breadcrumpbusiness />
      <HelpBusiness />
      <PlatformBusiness />
      <GameChangerBusiness />
      <NewsLetter />
      <FooterThree />
    </Wrapper>
  );
};

export default Business;
