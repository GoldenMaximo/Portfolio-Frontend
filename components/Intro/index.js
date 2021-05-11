import { createRef, useEffect } from 'react';
import gsap from 'gsap';
import * as S from './styles';
import PropTypes from 'prop-types';
import { ParticleStream } from '../ParticleStream';

export const Intro = ({ onClick }) => {
    const name = createRef();

    useEffect(() => {
        gsap.from(name.current, {
            delay: 0.2,
            duration: 1,
            opacity: 0,
            x: 0,
            y: -50,
        });
    }, []);

    return (
        <S.StyledSection>
            <ParticleStream />
            <S.NameContainer>
                <S.Name ref={name}>Gustavo Máximo</S.Name>
            </S.NameContainer>
            <S.Discover onClick={onClick}>Discover</S.Discover>
        </S.StyledSection>
    );
};

Intro.propTypes = {
    onClick: PropTypes.func,
};
