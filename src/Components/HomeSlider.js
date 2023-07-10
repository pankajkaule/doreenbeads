import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination, Navigation, FreeMode, Thumbs, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const sliderImgList = [
    "https://www.doreenbeads.com/images/newdbhomepage/en/images/20230109/dben-silver.jpg",
    "https://www.doreenbeads.com/images/newdbhomepage/en/images/20230104/dben-clean.jpg",
    "https://www.doreenbeads.com/images/newdbhomepage/en/images/20230106/dben-home.jpg",
    "https://www.doreenbeads.com/images/newdbhomepage/en/images/20230102/1100x420dbValentine.jpg",
    "https://www.doreenbeads.com/images/newdbhomepage/en/images/20221229/1100x420jp-newyear.jpg",
    "https://www.doreenbeads.com/images/newdbhomepage/en/images/20220527/dben-wkend.jpg"
]

const HomeSlider = () => {
    return (
        <div>
            <Swiper
                style={{
                    // @ts-ignore
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#000",
                    '--swiper-navigation-size': '20px',
                    "--swiper-pagination-bullet-padding": '2px',
                    height: 350
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
                className=""
            >
                {
                    sliderImgList.map((_img, index) => {
                        return (
                            <SwiperSlide ><div className="swiperslideimg"></div><img src={"/" + _img} alt="" /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default HomeSlider
