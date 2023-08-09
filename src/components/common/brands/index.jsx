import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const brand_images = [
  '/assets/img/brand/1.LBANK-NEW LOGO-1.jpg',
  '/assets/img/brand/2.encryptus logo.png',
  '/assets/img/brand/3.Astero Pay logo.png',
  '/assets/img/brand/4.suvik group.png',
  '/assets/img/brand/5.KoinBx- New logo.jpg',
  '/assets/img/brand/6.riva.png',
  '/assets/img/brand/7.TheNewsCrypto LOGO.png',
  '/assets/img/brand/8. jba.png',
  '/assets/img/brand/9.SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI--RESEARCH EXCELLENCE OF THE YEAR--INDIA-removebg-preview.png',
  '/assets/img/brand/10.SAVEETHA.png',
  '/assets/img/brand/11.-KRCT-removebg-preview.png',
  '/assets/img/brand/12.SCHOOL OF ALLIED HEALTH SCIENCES,VMRF-DU,SALEM---EMERGING INNOVATIVE ENTITY OF THE YEAR.jpg',
  '/assets/img/brand/13.Primas_trademark.jpg',
  '/assets/img/brand/14.RELICUS BIO.jpg',
  '/assets/img/brand/15.BBIG.jpg',
  '/assets/img/brand/16.junkaholic.png',
  '/assets/img/brand/17.odi.jpg',
  '/assets/img/brand/18.boogie.png',
  '/assets/img/brand/19. OVIYA.png',
  '/assets/img/brand/20.mspos-.JPG',
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
          slidesPerView: 6,
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
        }
      }}
    >
      {brand_images.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center">
            <img src={brand} alt="" style={{width:'120px'}}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;