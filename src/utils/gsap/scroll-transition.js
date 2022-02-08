import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrollTransition = ({ target, from, to }) => {
    gsap.fromTo(target, {
        opacity: 0,
        y: '2rem',
        ...from
    },
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            clearProps: 'y',
            scrollTrigger: {
                once: true,
                trigger: target,
                start: 'center bottom',
            },
            ...to
        }
    );
};

export default scrollTransition;