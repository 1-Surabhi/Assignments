import React from 'react'
import ProductCard from '../ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Navigation } from 'swiper/modules';
function MainSec() {
    const products = [
        {
            id: 1,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-13.png",
            bgColor: "#f4f6fa",
            title: "Cake & Milk",
            qty: 26
        },
        {
            id: 2,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png",
            bgColor: "#f2fce4",
            title: "Kiwi",
            qty: 26
        },
        {
            id: 3,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-11.png",
            bgColor: "#f2fce4",
            title: "Peach",
            qty: 26
        },
        {
            id: 4,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-9.png",
            bgColor: "#feefea",
            title: "Red Apple",
            qty: 26
        },
        {
            id: 5,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-3.png",
            bgColor: "#f2fce4",
            title: "Snack",
            qty: 26
        },
        {
            id: 6,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-1.png",
            bgColor: "#f2fce4",
            title: "Vegetables",
            qty: 26
        },
        {
            id: 7,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-2.png",
            bgColor: "#f2fce4",
            title: "Strawberry",
            qty: 26
        },
        {
            id: 8,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-4.png",
            bgColor: "#f2fce4",
            title: "Black Plum",
            qty: 26
        },
        {
            id: 9,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-5.png",
            bgColor: "#f2fce4",
            title: "apple",
            qty: 26
        }
        ,
        {
            id: 10,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-14.png",
            bgColor: "#f2fce4",
            title: "Coffee",
            qty: 26
        }
        ,
        {
            id: 11,
            img: "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-15.png",
            bgColor: "#f2fce4",
            title: "Headphone",
            qty: 26
        }

    ]
    return (

        <>
            <div style={{ padding: "50px" }}>
                <h1 style={{ padding: "20px 0" }}>Featured Categories</h1>
                <div className='allProduct'>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={39}
                        keyboard={{
                            enabled: true,
                        }}

                        navigation={true}
                        modules={[Keyboard, Navigation]}
                    >
                        {products.length > 0 && products.map((product) => (
                            <SwiperSlide key={product.id} style={{ padding: "50px 0" }}>
                                <ProductCard img={product?.img} bgColor={product?.bgColor} title={product.title} quantity={product.qty} />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>

            </div>

        </>

    )
}

export default MainSec