import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BannerCard.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/assets/banner-books/book6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/banner-books/book3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/banner-books/book2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/banner-books/book5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/banner-books/book1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/banner-books/book4.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard
