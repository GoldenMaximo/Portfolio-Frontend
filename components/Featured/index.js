import PropTypes from 'prop-types';
import { createRef, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import * as S from './styles';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

export const Featured = ({ projects }) => {
    const [elRefs, setElRefs] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);
    const projectsContainer = useRef(null);
    const title = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (elRefs.length) {
            gsap.from(title.current, {
                duration: 0.5,
                opacity: 0,
                x: 0,
                y: -100,
                scrollTrigger: {
                    trigger: projectsContainer.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });
            gsap.fromTo(elRefs.map(e => e.current), {
                duration: 0.5,
                opacity: 0,
                x: 0,
                y: -100
            }, {
                duration: 0.5,
                opacity: 1,
                x: 0,
                y: 0,
                stagger: {
                    amount: 0.5
                },
                delay: 0.5,
                scrollTrigger: {
                    trigger: projectsContainer.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }, [elRefs.length]);

    useEffect(() => {
        // add or remove refs
        setElRefs(elRefs => (
            Array(projects.length).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [projects.length]);

    const projectCardClickHandler = (event, slug) => {
        gsap.to(event.currentTarget, {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100
        });

        setTimeout(() => {
            router.push(`/projects/${slug}`);
        }, 500);
    };

    return (
        <S.StyledSection>
            <S.Background>
                <S.BackgroundFilter />
            </S.Background>
            <S.Title ref={title}>
                <h1>F E A T U R E D</h1>
            </S.Title>
            <S.ProjectsContainer ref={projectsContainer} >
                {projects ?
                    projects.map((e, i) => {
                        // Basically 1366x768 and similar resolutions, limiting the number of featured projects to maximum 6
                        if (windowWidth > 915 && windowWidth < 1920 && i > 5) {
                            return;
                        }
                        return (
                            <S.ProjectThumb onClick={event => projectCardClickHandler(event, e.slug)} key={e.slug} ref={elRefs[i]}>
                                <S.StyledImage src={e.thumbUrl} mobileImg={e.isMobile}/>
                                <S.ProjectTitle>
                                    {e.title}
                                </S.ProjectTitle>
                            </S.ProjectThumb>
                        );
                    }) : (
                        // TODO: toast if it doesn't load, server has issues or whatever
                        // TODO: Add loading gif - needs to be big and exquisite
                        <p>Loading</p>
                    )
                }
            </S.ProjectsContainer>
            <S.AllProjects>
                <a target="_blank" rel="noopener noreferrer" href="https://graphql.org/">
                    <h3>ALL PROJECTS →</h3>
                </a>
            </S.AllProjects>
        </S.StyledSection>
    );
};

Featured.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        thumbUrl: PropTypes.string,
        isMobile: PropTypes.bool
    })),
};

// This gets called on every request
// This shit not working because its not a page
