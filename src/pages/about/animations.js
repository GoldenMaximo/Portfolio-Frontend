import gsap, { Power3 } from 'gsap';

const initAnimations = refsObj => {
    gsap.fromTo(
        [
            refsObj.titleRef.current,
            refsObj.photoRef.current,
            ...refsObj.descriptionRef.current.children,
        ],
        {
            opacity: 0,
            x: 0,
            y: -100,
        },
        {
            duration: 1,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: {
                amount: 0.5,
            },
            delay: 0.5,
            scrollTrigger: {
                trigger: refsObj.descSectionRef.current,
                toggleActions: 'play reverse play reverse',
            },
        }
    );

    gsap.from(refsObj.scrollDownIconRef.current, {
        display: 'none',
        delay: 0,
        ease: Power3.easeIn,
        scrollTrigger: {
            trigger: refsObj.titleRef.current,
            toggleActions: 'play reverse reverse reverse',
        },
    });

    gsap.fromTo(
        [...refsObj.skillDescriptionRef.current.children],
        {
            opacity: 0,
            x: 0,
            y: -100,
        },
        {
            duration: 1,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: {
                amount: 0.5,
            },
            delay: 0.5,
            scrollTrigger: {
                trigger: refsObj.skillDescriptionRef.current,
                start: 'top center',
                toggleActions: 'play reverse play reverse',
            },
        }
    );
};

export default initAnimations;
