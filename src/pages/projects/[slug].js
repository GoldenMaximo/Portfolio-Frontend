import { Fragment, useEffect, useRef, createRef, useMemo, useState } from 'react';
import { Layout, Nav, Footer, ImageSwiper } from '../../../components';
import GraphQL from '../../../services/graphql';
import * as S from './styles';
import PropTypes from 'prop-types';
import { MdLaunch } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import gsap from 'gsap';

import dynamic from 'next/dynamic';

// Since it's not something imediately needed on page load,
//  loading it after ALL components were loaded shaves off 50kb on the initial loading.
const DynamicTooltip = dynamic(() => import('react-tooltip'));

export default function Project({ project }) {
    const [openSwiper, setOpenSwiper] = useState(false);
    const titleRef = useRef(null);
    const initialSlide = useRef(0);
    const projectImagesRef = useRef(null);
    const imagesRefs = useMemo(() => Array(project.images.length).fill().map(() => createRef()), [project]);
    const detailsRefs = useMemo(() => Array(4).fill().map(() => createRef()), [project]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // TODO: future feature: instead of going back on android - close swiper
        // window.onpopstate = e => {
        //     console.log('poppity pop: ', e);
        //     e.preventDefault();
        // };
    }, [project]);

    // GreenSock animations
    useEffect(() => {
        gsap.from(titleRef.current, {
            delay: 0.250,
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100
        });
        gsap.fromTo(imagesRefs.map(e => e.current), {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100,
        }, {
            delay: 0.5,
            duration: 0.5,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: {
                amount: 0.5
            }
        });
        gsap.from(detailsRefs.map(e => e.current), {
            delay: 1.2,
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100,
            stagger: {
                amount: 0.5
            }
        });
    }, [imagesRefs.length]);

    const imageOnClickHandler = i => {
        setOpenSwiper(true);
        initialSlide.current = i;
    };


    useEffect(() => {
        if (openSwiper) {
            document.body.style.overflow = 'hidden';
            return;
        }
        document.body.style.overflow = 'auto';
    }, [openSwiper]);

    return (
        <>
            <Nav />
            <DynamicTooltip uuid="tooltip" type="light" />
            {
                openSwiper && (
                    <ImageSwiper
                        project={project}
                        onClose={() => setOpenSwiper(false)}
                        initialSlide={initialSlide}
                    />
                )
            }
            <Layout title={project.title}>
                <S.StyledSection>
                    <S.Title ref={titleRef}>{project.title.toUpperCase()}</S.Title>
                    <S.ProjectContainer>
                        <S.ProjectImages ref={projectImagesRef}>
                            {
                                project.images.map((imageObj, i) => {
                                    if (!i) {
                                        return (
                                            <S.MainImage
                                                onClick={() => imageOnClickHandler(i)}
                                                data-tip={imageObj.imageName}
                                                src={imageObj.imageUrl}
                                                key={i}
                                                ref={imagesRefs[i]}
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
                                        />
                                    );
                                })
                            }
                        </S.ProjectImages>
                        <S.Details>

                            <S.Description ref={detailsRefs[0]}>
                                <p>{project.description}</p>
                            </S.Description>

                            <div ref={detailsRefs[1]}>
                                <MdLaunch />
                                <p>Deployed at: <a href={project.deployedAt}>{project.deployedAt}</a> (might take a few seconds for the server to cold start)</p>
                            </div>

                            <div ref={detailsRefs[2]}>
                                <SiGithub />
                                <p>Github URL{project.githubUrls.length > 1 ? 's:' : ':'} {
                                    project.githubUrls.map((url, i) => {
                                        return <a key={i} href={url}>{url}</a>;
                                    })
                                }</p>
                            </div>

                            <div ref={detailsRefs[3]}>
                                <FaTags />
                                <p>tags: [
                                    {
                                        project.techStack.map((tech, i) => {
                                            return (
                                                <Fragment key={i}>
                                                    <a href='/'> {tech} </a>{i !== project.techStack.length-1 ? <span> / </span> : null}
                                                </Fragment>
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
        images: PropTypes.arrayOf(PropTypes.shape({
            imageName: PropTypes.string,
            imageUrl: PropTypes.string
        })),
        githubUrls: PropTypes.arrayOf(PropTypes.string),
        isMobile: PropTypes.bool,
        deployedAt: PropTypes.string,
    }),
};