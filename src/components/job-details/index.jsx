import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import BreadcrumbIP from '../common/breadcrumb/breadcrumb_ip';
import JobDetailsArea from './job-details-area';
import HelpIP from "./help_ip";
import PlatformIP from './platform_ip';
import GameChangerIP from './gamechanger_ip';
import BusinessIP from './business_ip';
import NewsLetter from '../homes/home-4/news-letter';

const JobDetails = ({job}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour/>
      <BreadcrumbIP />
      <HelpIP />
      <PlatformIP />
      <GameChangerIP />
      <NewsLetter/>
      <FooterThree />
    </Wrapper>
  );
};

export default JobDetails;