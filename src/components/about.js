import React, { useEffect } from "react"
import Heading from '../components/heading';

import scrollTransition from '../utils/gsap/scroll-transition';

const About = () => {

    useEffect(() => {
        scrollTransition({ target: '.anime-y' });
    }, []);

    return (
        <div className="container mx-auto px-8 pt-24 max-w-screen-lg">
            <Heading title="關於我" englishTitle="About Me" classes="justify-center" />
            <div className="column-1 md:columns-2 gap-8">
                <div className="overflow-hidden rounded-xl w-9/12 mx-auto mb-8">
                    <img className="anime-y" src="/selfie_1.jpg" />
                </div>
                <div className="text-justify anime-y">
                    <p className="mb-5">嗨！我是國凱，中國科大資管系畢業，性格溫和，喜歡狗狗，在學習與工作中，漸漸發現自己樂於當一塊海綿汲取新知，享受解決問題後的成就與暢快感。時不時提醒自己常保向學、樂觀的心態，同時適度放鬆，才能看見越來越茁壯的自己。</p>

                    <p className="mb-5">目前工程師職涯資歷約一年多，在前一份工作經驗中，除了接觸到前端技術，中後期也涉略些後端技術，讓我更清楚網站開發的過程與脈絡，也因為接觸到後端領域，更瞭解前後端溝通的重要性。</p>

                    <p className="mb-5">程式與知識學海無涯，目前想主力於前端技術開發，未來期許能持續提升自己的後端能力，努力成為能獨當一面的工程師，為自己加分，更發揮所長幫助公司解決問題。</p>
                </div>
            </div>
        </div>
    )
};

export default About;