import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Testimonial from './testimonial';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <CreativeArea/>
      <BrandArea/>
      <ServicesArea/>
      <ProjectArea/>
      <Testimonial/>
      <BlogArea/>
      <NewsLetter/>
      <Footer/>
    </Wrapper>
  );
};

export default Home;