import PropTypes from 'prop-types';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Layout, Nav, Footer, ProjectsBgAnimation } from '../../../components';
import GraphQL from '../../../services/graphql';
import * as S from './styles';
import * as DS from '../../../components/default-styled-components';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import { FaTags } from 'react-icons/fa';
import { navigateWithTransition, isMobileCheck } from '../../../util/utilFuncs';

const Projects = ({ projects }) => {
    const router = useRouter();
    const containerRef = useRef();
    const [containerHeight, setContainerHeight] = useState(0);
    const [showAllTags, setShowAllTags] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [tagLimit, setTagLimit] = useState(10);

    const formatFilterTags = arr => [...new Set(arr.map(e => e.techStack).flatMap(e => e))];

    const execSearch = searchQuery => {
        const upperCaseQuery = searchQuery.toUpperCase();
        const result = [];
        projects.map(e => {
            if (e.techStack.join('').toUpperCase().includes(upperCaseQuery) || e.title.toUpperCase().includes(upperCaseQuery)) {
                result.push(e);
            }
        });

        setShownProjects(result);
        setFilterTags(formatFilterTags(result));
    };

    const [shownProjects, setShownProjects] = useState(projects);
    const [filterTags, setFilterTags] = useState(formatFilterTags(projects));

    useEffect(() => {
        // fail-safe in case user navigates from an open image swiper without closing it first
        document.documentElement.style.overflowY = 'auto';

        // Finish animation and reset page position
        window.scrollTo(0, 0);
        document.body.classList.remove('fadeOut');

        // query params
        if (!router.query.search) {
            // failsafe, case: click projects on nav
            // while previous state had a query
            setShownProjects(projects);
            setFilterTags(formatFilterTags(projects));
            return;
        }

        execSearch(router.query.search);
    }, [router.query]);

    useEffect(() => {
        // Sets background animation (ProjectsBgAnimation) height
        // based off of the projects container
        setContainerHeight(containerRef.current.offsetHeight);

        // Sets isMobile to define the limit of the shown tags
        setIsMobile(isMobileCheck());
    }, [shownProjects]);

    useEffect(() => {
        if (isMobile) {
            setTagLimit(4);
        }
    }, [isMobile]);

    const projectCardClickHandler = (event, slug) => {
        gsap.to(event.currentTarget, {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100
        });

        navigateWithTransition(router, `/projects/${slug}`);
    };

    const resetFiltersClickHandler = () => navigateWithTransition(router, '/projects/');

    const tagClickHandler = event => navigateWithTransition(router, `/projects?search=${event.currentTarget.innerText}`);

    const showTagsHandler = () => {
        if (showAllTags) {
            return setShowAllTags(false);
        }
        setShowAllTags(true);
    };

    return (
        <>
            <Nav />
            <Layout title={'Gustavo Máximo\'s Projects'}>
                <DS.Container bgColor='#759398' ref={containerRef}>

                    <ProjectsBgAnimation height={containerHeight} />

                    <S.ProjectsContainer isMobile={isMobile}>

                        <DS.Title
                            light
                            shadow
                            marginTop="5rem"
                            marginBottom="4rem"
                        >
                                PROJECTS
                        </DS.Title>

                        <S.TagsTitleContainer>
                            <S.TagsTitle>Filter{router.query.search && 'ed'} Tags&nbsp;</S.TagsTitle>
                            <FaTags />
                        </S.TagsTitleContainer>

                        <S.Tags>
                            {filterTags && filterTags.map((element, i) => {
                                if (!router.query.search && !showAllTags) {
                                    if (i > (tagLimit + 1)) return;
                                    if (i > tagLimit) return <p key={i}>...</p>;
                                }
                                return (
                                    <Fragment key={i}>
                                        <S.TagButton onClick={tagClickHandler}>{element}</S.TagButton>
                                        {i === filterTags.length-1 ? '' : <S.TagDivider>/</S.TagDivider>}
                                    </Fragment>
                                );
                            })}
                        </S.Tags>

                        {router.query.search ? (
                            <S.FiltersBtn onClick={resetFiltersClickHandler}>Reset Filters</S.FiltersBtn>
                        ) : (
                            <S.FiltersBtn onClick={showTagsHandler}>Show {showAllTags ? 'less' : 'more'}</S.FiltersBtn>
                        )}

                        <S.ProjectsGallery>

                            {shownProjects.length ? (
                                shownProjects.map(project => {
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
                            ) : (
                                <h1>No projects found</h1>
                            )}

                        </S.ProjectsGallery>
                    </S.ProjectsContainer>
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