import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { EffectCoverflow } from 'swiper/modules';
import './slider.css'

export const Slider = ({ slides }) => {
    return(
    //     <div className='testimonial'>
    //         <h1 className='intro'>NOT SOLD YET?</h1>
    //         <h2 className='follow-up'>SEE WHAT OUR CUSTOMERS HAVE TO SAY ABOUT THE TRIPS WE DELIVER</h2>
    //         <Swiper
    //         modules={[Navigation, Pagination, Scrollbar, A11y]}
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         navigation
    //         pagination={{ clickable: true }}
    //         scrollbar={{ draggable: true }}
    //     >

    //         {slides.map((slide) => (
    //             <SwiperSlide key={slide.image}>
    //                 <div className='image-relative'>
    //                     <img src={slide.image} alt={slide.location} />
    //                     <div className='title-content'>
    //                         <h3 className='location'>{slide.location}</h3>
    //                         <h3 className='rating'>{slide.Review}</h3> 
    //                         <h3 className='rating'>{slide.Rating}</h3>
    //                         <h3 className='name'> {slide.Reviewer} </h3>                         
    //                     </div>
    //                 </div>
    //             </SwiperSlide>
    //         ))}
    //     </Swiper>
    //   </div>
        <div className='container'>
            <h1 className='intro'>NOT SOLD YET?</h1>
            <h2 className='follow-up'>SEE WHAT OUR CUSTOMERS HAVE TO SAY ABOUT THE TRIPS WE DELIVER</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
      >
                {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <div className='image-relative'>
                        <img src={slide.image} alt={slide.location} />
                        <div className='title-content'>
                            <h3 className='location'>{slide.location}</h3>
                            <h3 className='rating'>{slide.Review}</h3> 
                            <h3 className='rating'>{slide.Rating}</h3>
                            <h3 className='name'> {slide.Reviewer} </h3>                         
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        
        </div>

    )
}