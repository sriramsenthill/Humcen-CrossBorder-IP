import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const brand_images = [
  '/assets/img/brand/1.png',
  '/assets/img/brand/2.png',
  '/assets/img/brand/3.png',
  '/assets/img/brand/4.png',
  '/assets/img/brand/5.png',
  '/assets/img/brand/6.png',
  '/assets/img/brand/7.png',
  '/assets/img/brand/8.png',
  '/assets/img/brand/9.png',
  '/assets/img/brand/10.png',
  '/assets/img/brand/11.png',
  '/assets/img/brand/12.png',
  '/assets/img/brand/13.png',
  '/assets/img/brand/14.png',
  '/assets/img/brand/15.png',
  '/assets/img/brand/16.png',
  '/assets/img/brand/17.png',
  '/assets/img/brand/18.png',
  '/assets/img/brand/19.png',
  '/assets/img/brand/20.png',
]

const Index = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={30}
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={
        { delay: 2500, disableOnInteraction: true, }
      }
      className="swiper-wrapper d-flex align-items-center"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 5,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 5,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4, 
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 3,
        },
        433: {
          slidesPerView: 2,
        },
        325: {
          slidesPerView: 1,
        },
      }}
    >
      {brand_images.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center">
            <img src={brand} alt="" style={{width:'180px'}}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;