import { Layout, Nav, Footer } from '../../components';
import GraphQL from '../../services/graphql';
import * as S from './styles';
import PropTypes from 'prop-types';
import { MdLaunch } from 'react-icons/md';
import { FaTags, FaGithub } from 'react-icons/fa';

export default function Project({ project }) {
    return (
        <>
            <Nav />
            <Layout title={project.title}>
                <S.StyledSection>
                    <S.Title>{project.title.toUpperCase()}</S.Title>
                    <S.ProjectContainer>
                        <S.ProjectImages>
                            {
                                project.imageUrls.map((url, i) => {
                                    if (!i) {
                                        return (
                                            <S.MainImage src={url} key={i}/>
                                        );
                                    }
                                    return (
                                        <S.BottomImages src={url} key={i}/>
                                    );
                                })
                            }
                        </S.ProjectImages>
                        <S.Details>
                            <S.Description>
                                <p>{project.description}</p>
                            </S.Description>
                            <div>
                                <MdLaunch /><p>Deployed at: <a href={project.deployedAt}>{project.deployedAt}</a> (might take a few seconds for the server to cold start)</p>
                            </div>
                            <div>
                                <FaGithub /><p>Github URL{project.githubUrls.length > 1 ? 's:' : ':'} {
                                    project.githubUrls.map((url, i) => {
                                        return <a key={i} href={url}>{url}</a>;
                                    })
                                }</p>
                            </div>
                            <div>
                                <FaTags /><p>tags: [
                                    {
                                        project.techStack.map((tech, i) => {
                                            return (
                                                <>
                                                    <a href='/' key={i}> {tech} </a>{i !== project.techStack.length-1 ? <span> / </span> : null}
                                                </>
                                            );
                                        })
                                    }
                             ]</p>
                            </div>
                        </S.Details>
                    </S.ProjectContainer>
                </S.StyledSection>
                <Footer />
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const graphqlQuery = {
        query: `
            {
                projects {
                    projects {
                        slug
                    }
                }
            }
        `
    };

    const { projects } = await GraphQL(graphqlQuery);

    return {
        paths: projects.projects.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const graphqlQuery = {
        query: `
            {
                project(slug: "${params.slug}") {
                    _id,
                    slug,
                    techStack,
                    imageUrls,
                    githubUrls,
                    title,
                    description,
                    deployedAt,
                    isMobile,
                }
            }
        `
    };

    const { project } = await GraphQL(graphqlQuery);

    return {
        props: {
            project
        }
    };
}

Project.propTypes = {
    project: PropTypes.shape({
        _id: PropTypes.string,
        slug: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        techStack: PropTypes.arrayOf(PropTypes.string),
        imageUrls: PropTypes.arrayOf(PropTypes.string),
        githubUrls: PropTypes.arrayOf(PropTypes.string),
        isMobile: PropTypes.bool,
        deployedAt: PropTypes.string,
    }),
};