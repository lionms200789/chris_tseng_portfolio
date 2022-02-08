import React, { useEffect, useLayoutEffect, useRef } from "react"
import Facebook from '../../static/icons/facebook.inline.svg'
import Mail from '../../static/icons/mail.inline.svg'
import Github from '../../static/icons/github.inline.svg'

//gsap
import { gsap } from "gsap/all"
import Transition from '../utils/gsap/transition'

const Intro = () => {
    return <div className="grid grid-flow-col grid-rows-8 grid-cols-12 bg-gray-200 h-100vh md:h-95vh overflow-hidden">
        <div className="row-start-1 row-end-5 col-start-1 col-end-7 relative">
            <div className="absolute -left-16 w-full rotate-90">
                <Transition from={{
                    x: '-50%',
                    opacity: 0,
                }} to={{
                    delay: 0.2,
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    clearProps: 'x',
                }}><svg viewBox="0 0 500 500" width="100%" id="blobSvg">
                        <path id="blob" d="M426.5,303.5Q453,357,422,405.5Q391,454,335.5,474Q280,494,234.5,452.5Q189,411,148,394Q107,377,60.5,342.5Q14,308,41.5,256.5Q69,205,76.5,154Q84,103,125,65.5Q166,28,220,40.5Q274,53,330.5,52Q387,51,412,101.5Q437,152,418.5,201Q400,250,426.5,303.5Z" fill="#487F78"></path>
                    </svg>
                </Transition>
            </div>
        </div>
        <div className="row-start-1 row-end-7 md:row-end-6 col-start-1 md:col-start-2 2xl:col-start-4 col-end-13 z-40 flex items-center relative overflow-hidden md:overflow-visible ">
            <div className="flex flex-col w-full justify-center text-black font-black px-8 z-50">
                <Transition from={{
                    x: '-50%',
                    opacity: 0,
                }} to={{
                    delay: 0.6,
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    clearProps: 'x',
                }}>
                    <h2 className="text-black text-xl md:text-2xl lg:text-6xl font-black">Hi
                        <span className="text-yellow-500">, </span>
                        my name is</h2>
                </Transition>
                <Transition from={{
                    x: '-50%',
                    opacity: 0,
                }} to={{
                    delay: 0.8,
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    clearProps: 'x',
                }}>
                    <h2 className="text-black text-4xl md:text-6xl lg:text-8xl font-black">Chris Tseng</h2>
                </Transition>
                <Transition from={{
                    x: '-50%',
                    opacity: 0,
                }} to={{
                    delay: 1,
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    clearProps: 'x',
                }}>
                    <div className="py-3 lg:py-4">
                        <span className="text-xl lg:text-2xl">曾國凱</span>
                        <span className="mx-4">Kuo-Kai Tseng</span>
                        <p className="font-normal mt-2 lg:mt-4 text-justify">你好！我是國凱，我是一名網頁前端工程師，</p>
                        <p className="font-normal">樂於嘗試學習新知、目前主攻使用 React 開發。</p>
                        <p></p>
                    </div>
                    <div className="flex items-center">
                        <a href="https://github.com/lionms200789" target='_blank'>
                            <Github className="w-6 h-6 mr-4" />
                        </a>
                        <a href="mailto:lionms200789@gmail.com" target='_blank'>
                            <Mail className="w-6 h-6 mr-4" />
                        </a>
                    </div>
                </Transition>
            </div>
            <div className="absolute lg:-top-1/3 -right-20 lg:-right-40 rotate-45 w-full sm:w-3/4">
                <Transition from={{
                    x: '50%',
                    opacity: 0,
                }} to={{
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    clearProps: 'x',
                }}>
                    <svg viewBox="0 0 500 500" width="100%" id="blobSvg">
                        <path id="blob" d="M437.5,301Q444,352,393.5,368.5Q343,385,304,380Q265,375,218,417Q171,459,117.5,437Q64,415,57,357Q50,299,83,258Q116,217,90.5,151.5Q65,86,124.5,80.5Q184,75,229,63.5Q274,52,320.5,66Q367,80,366,135Q365,190,398,220Q431,250,437.5,301Z" fill="#F8C912"></path>
                    </svg>
                </Transition>
            </div>
            <Transition classes="hidden sm:block w-4/5 sm:w-56 lg:w-full lg:max-w-xs absolute bottom-0 left-1/2 -translate-x-1/2 sm:-translate-x-0 lg:translate-x-1/4 2xl:-translate-x-1/4 z-40" from={{
                opacity: 0,
                scale: 0.3
            }} to={{
                delay: 1.2,
                opacity: 1,
                scale: 1,
                clearProps: 'scale',
            }}>
                <img src="/intro_selfie_2.png" />
            </Transition>
            <div className="absolute w-full md:w-0 lg:w-1/3 -left-12 lg:left-1/4 top-2/3 opacity-20">
                <Transition from={{
                    y: '50%',
                    opacity: 0,
                }} to={{
                    delay: 0.6,
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    clearProps: 'y',
                }}>
                    <svg viewBox="0 0 500 500" width="100%" id="blobSvg">
                        <path id="blob" d="M416,299.5Q387,349,346.5,386.5Q306,424,253.5,413Q201,402,132.5,393.5Q64,385,53.5,317.5Q43,250,104,219Q165,188,191.5,170Q218,152,267,99Q316,46,362,91Q408,136,426.5,193Q445,250,416,299.5Z" fill="#9ca3af"></path>
                    </svg>
                </Transition>
            </div>
        </div>
        {/* <div className="row-start-5 row-end-7 col-start-1 col-end-10 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500"></div> */}
    </div>
}

export default Intro;