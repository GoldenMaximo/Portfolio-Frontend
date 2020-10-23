import PropTypes from 'prop-types';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Layout, Nav, Footer, ConnectingDots } from '../../../components';
import GraphQL from '../../../services/graphql';
import * as S from './styles';
import * as DS from '../../../components/default-styled-components';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import ReactTooltip from 'react-tooltip';
import { navigateWithTransition } from '../../../util/utilFuncs';

const Projects = ({ projects }) => {
    const router = useRouter();
    const containerRef = useRef();
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        // fail-safe in case user navigates from an open image swiper without closing it first
        document.body.style.overflow = 'auto';

        // Finish animation and reset page position
        window.scrollTo(0, 0);
        document.body.classList.remove('fadeOut');

        setContainerHeight(containerRef.current.offsetHeight);
    }, []);

    const featuredTags = [
        'React',
        'Node.js',
        'MongoDB',
        'GraphQL',
    ];

    const projectCardClickHandler = (event, slug) => {
        gsap.to(event.currentTarget, {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100
        });

        navigateWithTransition(router, `/projects/${slug}`);
    };

    return (
        <>
            <Nav />
            <ReactTooltip uuid="tooltip" type="dark" />
            <Layout title={'Gustavo Máximo\'s Projects'}>
                <DS.Container bgColor='#759398' ref={containerRef}>

                    <ConnectingDots height={containerHeight} />

                    <DS.Title shadow>PROJECTS</DS.Title>
                    <S.Tags>
                        {featuredTags && featuredTags.map((element, i) => {
                            return (
                                <Fragment key={i}>
                                    <S.TagButton>{element}</S.TagButton>
                                    {i === featuredTags.length-1 ? '' : <S.TagDivider>/</S.TagDivider>}
                                </Fragment>
                            );
                        })}
                    </S.Tags>
                    <S.ProjectsGallery>
                        {
                            projects.map(project => {
                                const formatedTechStack = project.techStack.join(' / ');
                                let ellipsedTechStack;
                                if (formatedTechStack.length > 24) {
                                    ellipsedTechStack = `${formatedTechStack.substring(0, 21).trim()}...`;
                                }
                                const formatedTitle = (project.title.length > 24) ? `${project.title.substring(0, 21).trim()}...` : project.title;

                                return (
                                    <S.ProjectThumb onClick={event => projectCardClickHandler(event, project.slug)} key={project.slug}>
                                        <S.ProjectInfo>
                                            <h3 data-tip={project.title.length > 24 ? project.title : ''}> {formatedTitle} </h3>
                                            <p data-tip={formatedTechStack}> {ellipsedTechStack ? ellipsedTechStack : formatedTechStack} </p>
                                        </S.ProjectInfo>
                                        <S.ProjectImage>
                                            <S.StyledImage src={project.thumbUrl} mobileImg={project.isMobile}/>
                                        </S.ProjectImage>
                                    </S.ProjectThumb>
                                );
                            })
                        }
                    </S.ProjectsGallery>
                </DS.Container>
                <Footer />
            </Layout>
        </>
    );
};

export async function getStaticProps() {
    const graphqlQuery = {
        query: `
            {
                projects {
                    totalProjects,
                    projects {
                        _id,
                        slug,
                        title,
                        isMobile,
                        thumbUrl,
                        techStack,
                    }
                }
            }
        `
    };

    const data = await GraphQL(graphqlQuery);

    return { props: { projects: data.projects.projects } };
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        thumbUrl: PropTypes.string,
        isMobile: PropTypes.bool
    })),
};

export default Projects;