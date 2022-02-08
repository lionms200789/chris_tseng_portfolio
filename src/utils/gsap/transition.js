import gsap from "gsap";
import React, { useEffect, useRef } from 'react'

const Transition = ({ from, to, children, classes }) => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current, from, to);
    }, [ref]);

    return (<div className={classes} style={{
        opacity: 0
    }} ref={ref}>{children}</div>)
}

export default Transition;