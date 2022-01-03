import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const Carousel = ({ slides }) => (
  <Swiper wrapperTag="ul" spaceBetween={0} slidesPerView={4} navigation>
    {slides}
  </Swiper>
);

export default Carousel;
