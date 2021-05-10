import React from 'react';
import PropTypes from 'prop-types';
import { createRef, useEffect, useState, useRef } from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';
import * as DS from '../../../../../components/default-styled-components';
import { navigateWithTransition } from '../../../../../util/utilFuncs';

import { Project } from './Project';
import { initAnimations } from './animations';
import { TSParticlesWrapper } from '../../../../../components';

export const FeaturedProjects = React.forwardRef(({ projects }, projectsContainerRef) => {
    const [projectThumbRefs, setProjectThumbRefs] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);
    const preventHoverOverlay = useRef(null);
    const allProjectsButton = useRef(null);
    const backgroundRef = useRef(null);
    const title = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (projectThumbRefs.length) {
            initAnimations(
                title,
                projectsContainerRef,
                projectThumbRefs,
                preventHoverOverlay,
                allProjectsButton
            );
        }
    }, [projectThumbRefs.length]);

    useEffect(() => {
        setProjectThumbRefs(projectThumbRefs =>
            Array(projects.length)
                .fill()
                .map((_, i) => projectThumbRefs[i] || createRef())
        );
    }, [projects.length]);

    const projectCardClickHandler = (event, slug) => {
        navigateWithTransition(router, `/projects/${slug}`);
    };

    const allProjectsClickHandler = () => {
        navigateWithTransition(router, '/projects/');
    };

    const RenderProjects = ({ projects }) => {
        return projects.map((project, i) => {
            // Basically 1366x768 and similar resolutions, limiting the number of featured projects to maximum 6
            if (windowWidth > 915 && windowWidth < 1920 && i > 4) {
                return;
            }
            if (i > 6) return;

            project.techStack.length = 4;
            let formattedTechStack = project.techStack.join(' / ').trim();
            if (formattedTechStack.charAt(formattedTechStack.length - 1) === '/') {
                formattedTechStack = formattedTechStack
                    .substr(0, formattedTechStack.length - 1)
                    .trim();
            }

            return (
                <Project
                    key={project.slug}
                    project={project}
                    onClick={projectCardClickHandler}
                    elemRef={projectThumbRefs[i]}
                    formattedTechStack={formattedTechStack}
                />
            );
        });
    };

    return (
        <DS.Container>
            <S.PreventHoverOverlay ref={preventHoverOverlay} />
            <S.Background ref={backgroundRef}>
                <S.BackgroundFilter />
                {backgroundRef?.current && (
                    <TSParticlesWrapper height={backgroundRef.current.offsetHeight} style={1} />
                )}
            </S.Background>
            <S.Title ref={title}>
                <h1>F E A T U R E D</h1>
            </S.Title>
            <S.ProjectsContainer ref={projectsContainerRef}>
                <RenderProjects projects={projects} />
            </S.ProjectsContainer>
            <S.AllProjects onClick={allProjectsClickHandler} ref={allProjectsButton}>
                {Array(3)
                    .fill()
                    .map((_, i) => (
                        <h3 key={i}>ALL PROJECTS →</h3>
                    ))}
            </S.AllProjects>
        </DS.Container>
    );
});

FeaturedProjects.displayName = 'FeaturedProjects';

FeaturedProjects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            thumbUrl: PropTypes.string,
            isMobile: PropTypes.bool,
            techStack: PropTypes.arrayOf(PropTypes.string),
        })
    ),
};
