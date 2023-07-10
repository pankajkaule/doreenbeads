import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import '../styles/slider2.css'
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Slide2 = () => {

    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch("./weekend.json")
            .then(res => res.json())
            .then(element => setImg(element))
    }, [])
    // console.log(img, "ddkj");
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {img.map((slide) => {
                    return (
                        <SwiperSlide>
                            <div className="sliderimage2">
                                <img src={slide.src} alt="" />
                                <div className="current_price">{slide.nprice}</div>
                                <div className="intial_price">{slide.oprice}</div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default Slide2;


