import gsap from 'gsap';

// Using rest here so that if I decide to add more animations
//  or change the order of the animations in the future,
//   it will be easier to manage
const initAnimations = refsObj => {
    gsap.from(refsObj.titleRef.current, {
        delay: 0.250,
        duration: 0.5,
        opacity: 0,
        x: 0,
        y: -100
    });
    gsap.fromTo(refsObj.imagesRefs.map(e => e.current), {
        duration: 0.5,
        opacity: 0,
        x: 0,
        y: -100,
    }, {
        delay: 0.5,
        duration: 0.5,
        opacity: 1,
        x: 0,
        y: 0,
        stagger: {
            amount: 0.5
        }
    });
    gsap.from(refsObj.detailsRefs.map(e => e.current), {
        delay: 1.2,
        duration: 0.5,
        opacity: 0,
        x: 0,
        y: -100,
        stagger: {
            amount: 0.5
        }
    });
};

export default initAnimations;
