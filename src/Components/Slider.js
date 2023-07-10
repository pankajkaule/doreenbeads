import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import '../styles/slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Slider = () => {

    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch("./banner.json")
            .then(res => res.json())
            .then(element => setImg(element))
    }, [])
    // console.log(img, "ddkj");
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {img.map((slide) => {
                    return (<SwiperSlide><div className="sliderimage"><img src={slide} alt="" /></div></SwiperSlide>)

                })}

            </Swiper>
        </div>
    )
}

export default Slider;


