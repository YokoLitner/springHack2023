import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

const Slider = (slides: { slides: string[] }) => {
  return (
    <div className="flex max-w-[1200px] max-h-[300px] mt-20 m-auto max-[1200px]:mt-10 max-[1200px]:m-0">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect={'slide'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {slides.slides.map((slide: string) => (
          <SwiperSlide key={slide}>
            <img
              src={slide}
              style={{ listStyle: 'none', borderRadius: '10px', maxHeight: '250px', width: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
