import gsap from 'gsap';

const initAnimations = async refsObj => {
    const { ScrollTrigger } = (await import('gsap/ScrollTrigger'));
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = refsObj.projectCardsRefs.map(e => e.current);

    // TODO: Find a way to animate Y axis on page load without messing up the ScrollTrigger batch animation
    //  So far I was only able to achieve the opacity animation by adding opacity 0 to the card's CSS,
    //   when the page loads each card fades in, but doesn't fade in from above.
    //    As soon as I try to modify anything related to the Y axis it bugs up the ScrollTrigger.
    ScrollTrigger.batch(projectCards, {
        interval: 0.1, // time window (in seconds) for batching to occur.
        batchMax: 0,   // maximum batch size (targets). Can be function-based for dynamic values
        onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
        onLeave: batch => gsap.to(batch, {opacity: 0, y: -100, stagger: 0.15, overwrite: true}),
        onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
        onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: -100, stagger: 0.15, overwrite: true}),
        // you can also define most normal ScrollTrigger values like start, end, etc.
        start: 'top bottom',
        end: 'bottom top'
    });
};

export default initAnimations;
