import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import PropTypes from 'prop-types';

import {
    translations,
    featuredProjectCardBgConfig,
    featuredProjectsBgConfig,
    projectsPageBgConfig,
} from './configs';
import * as S from './styles';

/**
 * Renders a ParticleJS canvas
 * @param {string} id id of the canvas container.
 * If the component gets destroyed often, pass an id to avoid "Warning: Prop id did not match.".
 * @param {number} height Height of the canvas to be generated.
 * @param {number} style Style of the animation.
 * ### *Styles:*
 * - Featured Project Card Background = 0
 * - Featured Projects Background = 1
 * - Projects Page Background = 2
 */

const randomId = `TSParticle-Container-${Math.floor(Math.random() * 99 + 1)}`;

export const TSParticlesWrapper = ({ height = 0, style = 0, id = randomId, techStack = [] }) => {
    const [renderCanvas, setRenderCanvas] = useState(false);

    const configStyles = Object.freeze({
        0: featuredProjectCardBgConfig,
        1: featuredProjectsBgConfig,
        2: projectsPageBgConfig,
    });

    useEffect(() => {
        if (height) setRenderCanvas(true);
        return () => {
            setRenderCanvas(false);
        };
    }, [height]);

    const checkIfIconExists = async iconName => {
        const iconUrl = `https://simpleicons.org/icons/${iconName}.svg`;
        const res = await fetch(iconUrl);
        if (res.status === 200) {
            return iconUrl;
        }
        console.log(
            `I don't it's possible to avoid these 404s unfortunately,
             I'm dynamically looking up on simpleicons.org to see
             if there's an icon available for ${iconName} and aparrently there isn't.`
        );
        console.log(
            `If you have any idea on how to deal with this issue please feel to contact me
             or contribute @ https://github.com/GoldenMaximo/Portfolio-Frontend`
        );
        return;
    };

    const fetchIcons = async () => {
        const iconPromises = techStack.map(e => {
            if (e) {
                if (translations[e]) {
                    return checkIfIconExists(translations[e]);
                }
                return checkIfIconExists(e.toLowerCase());
            }
        });

        const iconUrls = await Promise.all(iconPromises);

        const iconImgObjs = iconUrls
            .filter(e => e)
            .map(e => {
                return {
                    src: e,
                    width: 400,
                    height: 400,
                    replaceColor: true,
                    fill: true,
                };
            });

        const configWithImages = {
            ...featuredProjectCardBgConfig,
            particles: {
                ...featuredProjectCardBgConfig.particles,
                shape: {
                    ...featuredProjectCardBgConfig.particles.shape,
                    type: 'images',
                    images: iconImgObjs,
                },
            },
        };

        return configWithImages;
    };

    const onInit = async Main => {
        if (Main) {
            const particlesInstance = await Main.load(
                id,
                style ? configStyles[style] : await fetchIcons()
            );
            if (particlesInstance) particlesInstance.refresh();
        }
        return;
    };

    return (
        renderCanvas && (
            <S.ParticlesContainer height={height + (style && 20)}>
                {/* If the animation is the Featured Projects Card background (style === 0),
                 to start the component it will use the init function.
                  Otherwise if it's (style > 0), it will use the options prop to start */}
                {/* This is due to a bug with the lib I'm not willing to look into right now */}
                <Particles id={id} init={!style && onInit} options={style && configStyles[style]} />
            </S.ParticlesContainer>
        )
    );
};

TSParticlesWrapper.propTypes = {
    id: PropTypes.string,
    style: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string),
};
