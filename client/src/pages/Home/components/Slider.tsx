import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

const Slider = (slides: { slides: string[] }) => {
  console.log(slides)
  return (
    <div className="flex justify-center max-w-[1200px] max-h-[300px] m-auto mt-20 max-[1200px]:mt-10">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        effect={'slide'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {slides.slides.map((slide: string) => (
          <SwiperSlide key={slide}>
            <img src={slide} style={{ listStyle: 'none', borderRadius: '10px', maxHeight: '250px', width: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
