import gsap from 'gsap';

const initAnimations = (titleRef, imagesRefs, detailsRefs) => {
    gsap.from(titleRef.current, {
        delay: 0.25,
        duration: 0.5,
        opacity: 0,
        x: 0,
        y: -100,
    });
    gsap.fromTo(
        imagesRefs.map(e => e.current),
        {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100,
        },
        {
            delay: 0.5,
            duration: 0.5,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: {
                amount: 0.5,
            },
        }
    );
    gsap.from(
        detailsRefs.map(e => e.current),
        {
            delay: 1.2,
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100,
            stagger: {
                amount: 0.5,
            },
        }
    );
};

export default initAnimations;
