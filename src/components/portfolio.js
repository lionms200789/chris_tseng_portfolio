import React, { useEffect, useRef } from "react"
import Heading from "./heading";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

import gsap from "gsap";
import scrollTransition from "../utils/gsap/scroll-transition";

const projects = [
    {
        title: '訂餐網站 - 享瘦餐盒',
        img: '/portfolio_food_order.png',
        label: '個人作品',
        description: '此專案為模擬訂餐系統，主要想透過工作中所學經驗以及透過實作來學習 React.js 及其 Ecosystem。',
        link: 'https://ec2-54-248-142-143.ap-northeast-1.compute.amazonaws.com/'
    },
    {
        title: '訂餐網站後台CMS - 享瘦餐盒',
        img: '/portfolio_food_order_cms.png',
        label: '個人作品',
        description: '此專案為模擬訂餐系統，主要想透過工作中所學經驗以及透過實作來學習 React.js 及其 Ecosystem。',
        link: 'https://ec2-54-248-142-143.ap-northeast-1.compute.amazonaws.com/cms'
    },
    {
        title: '模擬服飾電商 - Haseiyo',
        img: '/portfolio_haseiyo.png',
        label: '個人作品',
        description: '此專案作品為模擬服飾電商，銷售主題為男性服飾，透過 Vue.js、Vuex實作。',
        link: 'https://lionms200789.github.io/haseiyo-Vuex/#/'
    },
    {
        title: '旅館訂房系統 - White Space',
        img: '/portfolio_hotel.png',
        label: '個人作品',
        description: '此小專案為六角學院主辦的第二屆 The F2E 精神時光屋，我所參與的第六關卡實作。',
        link: 'https://lionms200789.github.io/white-space-hotel/#/'
    }
]

const Portfolio = () => {
    // const swiperRef = useRef(null);

    useEffect(() => {
        let slides = gsap.utils.toArray('.swiper-slide')
        slides.forEach(item => scrollTransition({ target: item, from: { x: '-2.5rem', y: 0 }, to: { x: 0, duration: 1, delay: 0.3 } }))
    }, [])

    return <div className="container mx-auto px-8 pt-24">
        <Heading title="網頁作品" englishTitle="Portfolio" classes="justify-center" />
        <Swiper
            slidesPerView={1.1}
            spaceBetween={32}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            }}
            className="mySwiper my-8"
            breakpoints={{
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 3
                }
            }}
            modules={[Autoplay]}
            style={{
                overflow: 'visible'
            }}
        >
            {
                projects.map((item, idx) => {
                    return <SwiperSlide key={idx}>
                        <a href={item.link} target="_blank" className="group">
                            <div className="relative shadow-md rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-150 ease-linear">
                                <img src={item.img} className="group-hover:blur-sm transition-all duration-150 ease-linear" />
                                <span className="absolute top-full left-1/2 text-white px-5 py-1 rounded-full bg-yellow-500 -translate-x-1/2 group-hover:opacity-100 transition-all duration-150 ease-linear group-hover:top-1/2 group-hover:-translate-y-1/2">前往查看</span>
                            </div>
                            <h5 className="text-xl font-bold mt-2 transition-colors duration-150 ease-linear text-primary group-hover:text-yellow-500">{item.title}</h5>
                            <p className="mt-2 group-hover:text-yellow-500">{item.description}</p>
                        </a>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </div >
}

export default Portfolio;