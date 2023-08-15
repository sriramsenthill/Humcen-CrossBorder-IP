import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area';
import FeatureArea from './feature-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';
import Stories from '../common/stories/stories';
import NewsLetter from '../homes/home-4/news-letter';


const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
     <HeaderSix/>
      <Breadcrumb/>
      <Stories/>
      <NewsLetter/>
      <FooterThree />
    </Wrapper>
  );
};

export default About;