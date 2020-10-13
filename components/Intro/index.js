import { createRef, useEffect } from 'react';
import gsap from 'gsap';
import * as S from './styles';


export const Intro = () => {
    const elemRef = createRef();
    const eh = createRef();
    const ehd = createRef();

    useEffect(() => {

        gsap.from(elemRef.current, {
            delay: 0.2,
            duration: 1,
            opacity: 0,
            x: 0,
            y: -50
        });

        gsap.fromTo(eh.current, {
            duration: 2,
            css: {
                backgroundImage: 'linear-gradient(1080deg, rgb(159 69 9 / 100%), transparent)',
            }
        }, {
            duration: 2,
            css: {
                backgroundImage: 'linear-gradient(0deg, rgb(159 69 9 / 0%), transparent)',
            }
        });
    }, []);

    return (
        <S.StyledSection ref={ehd}>
            <p ref={elemRef}>GUSTAVO MÁXIMO</p>
            <a ref={eh} href="/products">Projects</a>
        </S.StyledSection>
    );
};