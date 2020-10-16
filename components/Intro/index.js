import { createRef, useEffect } from 'react';
import gsap from 'gsap';
import * as S from './styles';


export const Intro = () => {
    const title = createRef();
    const button = createRef();

    const btnAnim = () => {
        gsap.fromTo(button.current, {
            duration: 2,
            css: {
                backgroundImage: 'linear-gradient(1080deg, rgb(159 69 9 / 85%), transparent)',
            }
        }, {
            duration: 2,
            css: {
                backgroundImage: 'linear-gradient(0deg, rgb(159 69 9 / 0%), transparent)',
            }
        });
    };

    const scrollDown = () => {
        window.scrollTo({
            top: (window.outerHeight >= 1050 ? (window.outerHeight - (window.outerHeight / 12)) : window.outerHeight),
            left: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        gsap.from(title.current, {
            delay: 0.2,
            duration: 1,
            opacity: 0,
            x: 0,
            y: -50
        });

        btnAnim();
    }, []);

    return (
        <S.StyledSection>
            <p ref={title}>GUSTAVO MÁXIMO</p>
            <a ref={button} onClick={scrollDown}>Projects</a>
        </S.StyledSection>
    );
};