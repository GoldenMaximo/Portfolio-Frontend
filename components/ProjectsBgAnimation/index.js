import * as S from './styles';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { isMobileCheck } from '../../util/utilFuncs';

export const ProjectsBgAnimation = ({ height }) => {

    const initParticles = async () => {
        (await import('particles.js'));

        window.particlesJS.load('container', '/config/particlesjs-config.json');
    };

    useEffect(() => {
        if(!height) return;

        if (!isMobileCheck()) {
            initParticles();
        }
    }, [height]);

    return (
        <S.ParticlesContainer id="container" height={height + 20} />
    );
};

ProjectsBgAnimation.propTypes = {
    height: PropTypes.number
};
