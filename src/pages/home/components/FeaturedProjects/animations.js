import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = (
    title,
    projectsContainerRef,
    projectThumbRefs,
    preventHoverOverlay,
    allProjectsButton
) => {
    gsap.from(title.current, {
        duration: 0.5,
        opacity: 0,
        x: 0,
        y: -100,
        scrollTrigger: {
            trigger: projectsContainerRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
        },
    });
    gsap.from(
        projectThumbRefs.map(e => e.current),
        {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100,
            stagger: {
                amount: 0.5,
            },
            delay: 0.5,
            scrollTrigger: {
                trigger: projectsContainerRef.current,
                start: 'top center',
                toggleActions: 'play none none reverse',
            },
        }
    );
    gsap.from(preventHoverOverlay.current, {
        display: 'block',
        delay: 1.5,
        scrollTrigger: {
            trigger: projectsContainerRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
        },
    });
    gsap.fromTo(
        allProjectsButton.current.children[1],
        {
            textShadow: '0px 0px 0px #ffffff, 0px 0px 0px #ffffff',
        },
        {
            textShadow: '0px 0px 20px #ffffff, 0px 0px 1000px #ffffff',
            repeat: -1,
            delay: 0,
            duration: 3,
            ease: Power3.easeIn,
        }
    );
};
