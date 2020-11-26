import * as S from './styles';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const ProjectsBgAnimation = ({ height }) => {

    const initParticles = async () => {
        (await import('particles.js'));

        window.particlesJS.load('container', '/config/particlesjs-config.json', function() {
            console.log('callback - particles.js config loaded');
        });
    };

    useEffect(() => {
        if(!height) return;

        initParticles();
    }, [height]);

    return (
        <S.ParticlesContainer id="container" height={height} />
    );
};

ProjectsBgAnimation.propTypes = {
    height: PropTypes.number
};
