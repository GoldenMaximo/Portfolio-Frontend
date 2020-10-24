import { createRef, useEffect } from 'react';
import gsap from 'gsap';
import * as S from './styles';
import PropTypes from 'prop-types';


export const Intro = ({ onClick }) => {
    const title = createRef();
    const button = createRef();

    const btnAnim = () => {
        gsap.fromTo(button.current, {
            duration: 5,
            css: {
                backgroundImage: 'linear-gradient(1080deg, rgb(159 69 9 / 85%), transparent)',
            }
        }, {
            duration: 5,
            css: {
                backgroundImage: 'linear-gradient(0deg, rgb(159 69 9 / 0%), transparent)',
            }
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
            <a ref={button} onClick={onClick}>Projects</a>
        </S.StyledSection>
    );
};

Intro.propTypes = {
    onClick: PropTypes.func
};