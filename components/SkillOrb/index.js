import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigateWithTransition } from '../../util/utilFuncs';
import { useRouter } from 'next/router';

export const SkillOrb = ({ height, width }) => {
    const router = useRouter();

    const skills = [
        'HTML',
        'JavaScript',
        'CSS',
        'SASS',
        'Flexbox',
        'Styled-Components',
        'GSAP',
        'Bootstrap',
        'Material-Design',
        'Node.js',
        'GraphQL',
        'MongoDB',
        'Mongoose',
        'EJS',
        'Express.js',
        'JWT',
        'React.js',
        'React Native',
        'Expo',
        'Next.js',
        'Socket.IO',
        'JQuery',
        'Redux',
        'Jest',
        'ESLint',
        'Git',
        'NPM',
        'Yarn',
        'pnpm',
        'Jira',
        'SCRUM',
        'Firebase',
        'Heroku',
        'GIMP',
        'Mocha',
        'Chai',
        'Sinon',
        'TypeScript',
        'Deno',
    ];

    useEffect(() => {
        if (width) {
            window.TagCanvas.Start('orb-canvas', '', {
                textColour: 'black',
                outlineColour: 'black',
                textHeight: 20,
                depth: 1,
                minSpeed: 0.01,
                clickToFront: 1000,
                wheelZoom: false,
                shuffleTags: true,
            });
            window.TagCanvas.SetSpeed('orb-canvas', [0.02, -0.02]);
        }
    }, [width]);

    const tagClickHandler = (event, tag) => {
        event.preventDefault();
        navigateWithTransition(router, `/projects?search=${tag}`);
    };

    return (
        <canvas id="orb-canvas" height={height} width={width}>
            <ul>
                {skills.length &&
                    skills.map((item, key) => (
                        <li key={key}>
                            <a onClick={event => tagClickHandler(event, item)}>{item}</a>
                        </li>
                    ))}
            </ul>
        </canvas>
    );
};

SkillOrb.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
};
