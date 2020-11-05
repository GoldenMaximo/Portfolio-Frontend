import React from 'react';
import PropTypes from 'prop-types';
import { createRef, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import * as S from './styles';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import * as DS from '../default-styled-components';
import { navigateWithTransition } from '../../util/utilFuncs';

gsap.registerPlugin(ScrollTrigger);

export const Featured = React.forwardRef(({ projects }, projectsContainerRef) => {
    const [elemRefs, setElemRefs] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);
    const preventHoverOverlay = useRef(null);
    const allProjectsButton = useRef(null);
    const title = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (elemRefs.length) {
            gsap.from(title.current, {
                duration: 0.5,
                opacity: 0,
                x: 0,
                y: -100,
                scrollTrigger: {
                    trigger: projectsContainerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });
            gsap.from(elemRefs.map(e => e.current), {
                duration: 0.5,
                opacity: 0,
                x: 0,
                y: -100,
                stagger: {
                    amount: 0.5
                },
                delay: 0.5,
                scrollTrigger: {
                    trigger: projectsContainerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });
            gsap.from(preventHoverOverlay.current, {
                display: 'block',
                delay: 1.5,
                scrollTrigger: {
                    trigger: projectsContainerRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });
            gsap.from(allProjectsButton.current, {
                textShadow: '0px 0px 30px white',
                repeat: -1,
                delay: 0,
                duration: 3.5
            });
        }
    }, [elemRefs.length]);

    useEffect(() => {
        setElemRefs(elemRefs => (
            Array(projects.length).fill().map((_, i) => elemRefs[i] || createRef())
        ));
    }, [projects.length]);

    const projectCardClickHandler = (event, slug) => {
        navigateWithTransition(router, `/projects/${slug}`);
    };

    const allProjectsClickHandler = () => {
        navigateWithTransition(router, '/projects/');
    };

    return (
        <DS.Container>
            <S.PreventHoverOverlay ref={preventHoverOverlay} />
            <S.Background>
                <S.BackgroundFilter />
            </S.Background>
            <S.Title ref={title}>
                <h1>F E A T U R E D</h1>
            </S.Title>
            <S.ProjectsContainer ref={projectsContainerRef} >
                {
                    projects.map((project, i) => {
                        // Basically 1366x768 and similar resolutions, limiting the number of featured projects to maximum 6
                        if (windowWidth > 915 && windowWidth < 1920 && i > 4) {
                            return;
                        }
                        if (i > 6) return;

                        project.techStack.length = 4;
                        let formattedTechStack = project.techStack.join(' / ').trim();
                        if (formattedTechStack.charAt(formattedTechStack.length-1) === '/') {
                            formattedTechStack = formattedTechStack.substr(0, formattedTechStack.length - 1 ).trim();
                        }
                        return (
                            <S.ProjectThumbContainer key={project.slug}>
                                <S.ProjectThumb
                                //   onMouseMove={event => mousemoveHandler(event)}
                                    onClick={event => projectCardClickHandler(event, project.slug)}
                                    ref={elemRefs[i]}
                                >
                                    <S.StyledImage src={project.thumbUrl}/>
                                    <S.ProjectTitle>
                                        {project.title}
                                    </S.ProjectTitle>
                                    <S.Tags>
                                        [&nbsp;{formattedTechStack}...&nbsp;]
                                    </S.Tags>
                                </S.ProjectThumb>
                            </S.ProjectThumbContainer>
                        );
                    })
                }
            </S.ProjectsContainer>
            <S.AllProjects onClick={allProjectsClickHandler} ref={allProjectsButton}>
                <h3>ALL PROJECTS →</h3>
            </S.AllProjects>
        </DS.Container>
    );
});

Featured.displayName = 'Featured';

Featured.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        thumbUrl: PropTypes.string,
        isMobile: PropTypes.bool,
        techStack: PropTypes.arrayOf(PropTypes.string)
    })),
};

// This gets called on every request
// This shit not working because its not a page
