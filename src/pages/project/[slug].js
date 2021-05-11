import { Fragment, useEffect, useRef, createRef, useMemo, useState } from 'react';
import { Layout, Nav, Footer, ImageSwiper } from '../../../components';
import GraphQL from '../../../services/graphql';
import * as S from './styles';
import PropTypes from 'prop-types';
import { MdLaunch } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import * as DS from '../../../components/default-styled-components';
import { useRouter } from 'next/router';
import { navigateWithTransition } from '../../../util/utilFuncs';
import initAnimations from './animations';

export default function Project({ project }) {
    const [openSwiper, setOpenSwiper] = useState(false);
    const titleRef = useRef(null);
    const initialSlide = useRef(0);
    const projectImagesRef = useRef(null);
    const imagesRefs = useMemo(
        () =>
            Array(project.images.length)
                .fill()
                .map(() => createRef()),
        [project]
    );
    const detailsRefs = useMemo(
        () =>
            Array(4)
                .fill()
                .map(() => createRef()),
        [project]
    );
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.remove('fadeOut');
    }, [project]);

    useEffect(() => {
        initAnimations(titleRef, imagesRefs, detailsRefs);
    }, [imagesRefs.length]);

    const imageOnClickHandler = i => {
        setOpenSwiper(true);
        initialSlide.current = i;
    };

    const tagClickHandler = event =>
        navigateWithTransition(router, `/projects?search=${event.target.innerText.trim()}`);

    useEffect(() => {
        if (openSwiper) {
            document.documentElement.style.overflowY = 'hidden';
            return;
        }
        document.documentElement.style.overflowY = 'auto';
    }, [openSwiper]);

    return (
        <>
            <Nav />
            {openSwiper && (
                <ImageSwiper
                    project={project}
                    onClose={() => setOpenSwiper(false)}
                    initialSlide={initialSlide}
                />
            )}
            <Layout title={project.title}>
                <S.StyledSection>
                    <DS.Title ref={titleRef}>{project.title.toUpperCase()}</DS.Title>
                    <S.ProjectContainer>
                        <S.ProjectImages ref={projectImagesRef}>
                            {project.images.map((imageObj, i) => {
                                if (!i) {
                                    return (
                                        <S.MainImage
                                            onClick={() => imageOnClickHandler(i)}
                                            data-tip={imageObj.imageName}
                                            src={imageObj.imageUrl}
                                            key={i}
                                            ref={imagesRefs[i]}
                                            isMobile={project.isMobile}
                                        />
                                    );
                                }
                                return (
                                    <S.BottomImages
                                        onClick={() => imageOnClickHandler(i)}
                                        data-tip={imageObj.imageName}
                                        src={imageObj.imageUrl}
                                        key={i}
                                        ref={imagesRefs[i]}
                                        isMobile={project.isMobile}
                                    />
                                );
                            })}
                        </S.ProjectImages>
                        <S.Details>
                            <S.Description ref={detailsRefs[0]}>
                                <p>{project.description}</p>
                            </S.Description>

                            {project.deployedAt && (
                                <div ref={detailsRefs[1]}>
                                    <MdLaunch />
                                    <p>
                                        Deployed at: [&nbsp;
                                        <a href={project.deployedAt}>{project.deployedAt}</a>&nbsp;]
                                        <br />
                                        (might take a few seconds for the server to cold start)
                                    </p>
                                </div>
                            )}

                            <div ref={detailsRefs[2]}>
                                <SiGithub />
                                <p>
                                    Github URL{project.githubUrls.length > 1 ? 's:' : ':'}{' '}
                                    {project.githubUrls.map((url, i) => {
                                        return (
                                            <span key={i}>
                                                [&nbsp;<a href={url}>{url}</a>&nbsp;]
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>

                            <div ref={detailsRefs[3]}>
                                <FaTags />
                                <p>
                                    tags: [
                                    {project.techStack.map((tech, i) => {
                                        return (
                                            <Fragment key={i}>
                                                <S.Tag onClick={tagClickHandler}>
                                                    &nbsp;{tech}&nbsp;
                                                </S.Tag>
                                                {i !== project.techStack.length - 1 ? (
                                                    <span>/</span>
                                                ) : null}
                                            </Fragment>
                                        );
                                    })}
                                    ]
                                </p>
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
        `,
    };

    const { projects } = await GraphQL(graphqlQuery);

    return {
        paths: projects.projects.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
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
                    images {
                        imageUrl,
                        imageName
                    },
                    githubUrls,
                    title,
                    description,
                    deployedAt,
                    isMobile,
                }
            }
        `,
    };

    const { project } = await GraphQL(graphqlQuery);

    return {
        props: {
            project,
        },
    };
}

Project.propTypes = {
    project: PropTypes.shape({
        _id: PropTypes.string,
        slug: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        techStack: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                imageName: PropTypes.string,
                imageUrl: PropTypes.string,
            })
        ),
        githubUrls: PropTypes.arrayOf(PropTypes.string),
        isMobile: PropTypes.bool,
        deployedAt: PropTypes.string,
    }),
};
