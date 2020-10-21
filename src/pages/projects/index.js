import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { Layout, Nav, Footer } from '../../../components';
import GraphQL from '../../../services/graphql';
import * as S from './styles';
import * as DS from '../../../components/default-styled-components';
import { useRouter } from 'next/router';
import gsap from 'gsap';

const Projects = ({ projects }) => {
    const router = useRouter();

    useEffect(() => {
        // fail-safe in case user navigates from an open image swiper without closing it first
        document.body.style.overflow = 'auto';

        // Finish animation and reset page position
        window.scrollTo(0, 0);
        document.body.classList.remove('fadeOut');
    }, []);

    const featuredTags = [
        'React',
        'Node.js',
        'MongoDB',
        'GraphQL',
    ];

    const navigateWithTransition = path => {
        document.body.classList.add('fadeOut');

        setTimeout(() => {
            router.push(path);
        }, 500);
    };

    const projectCardClickHandler = (event, slug) => {
        gsap.to(event.currentTarget, {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100
        });

        navigateWithTransition(`/projects/${slug}`);
    };

    return (
        <>
            <Nav />
            <Layout title={'Gustavo Máximo\'s Projects'}>
                <DS.Container>
                    <DS.Title>PROJECTS</DS.Title>
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
                                return (
                                    <S.ProjectThumb onClick={event => projectCardClickHandler(event, project.slug)} key={project.slug}>
                                        <S.StyledImage src={project.thumbUrl} mobileImg={project.isMobile}/>
                                        <S.ProjectTitle>
                                            {project.title}
                                        </S.ProjectTitle>
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
                projects(page: 1) {
                    totalProjects,
                    projects {
                        _id,
                        slug,
                        title,
                        thumbUrl,
                        isMobile
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