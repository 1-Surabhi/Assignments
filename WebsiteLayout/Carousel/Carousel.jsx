import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <>
            <div style={{ padding: "20px 10px" }}>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide ><Slide img={"https://nest-nextjs-13.vercel.app/assets/imgs/slider/slider-1.png"} mainText1={"Don't miss amazing"} mainText2={"grocery deals"} subText={"Sign up for the daily newsletter"} /></SwiperSlide>
                    <SwiperSlide><Slide img={"https://nest-nextjs-13.vercel.app/assets/imgs/slider/slider-2.png"} mainText1={"Fresh Vegetables"} mainText2={"Big discount"} subText={"Save up to 50% off on your first order"} /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}