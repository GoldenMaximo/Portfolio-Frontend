import { useRef, useEffect, useState } from 'react';

import { Layout, Nav, Footer, ScrollDownIcon, SkillOrb } from '../../../components';
import * as S from './styles';
import * as DS from '../../../components/default-styled-components';
import gsap, { Power3 } from 'gsap';
import { isMobileCheck } from '../../../util/utilFuncs';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);
    const titleRef = useRef(null);
    const photoRef = useRef(null);
    const descriptionRef = useRef(null);
    const descSectionRef = useRef(null);
    const scrollDownIconRef= useRef(null);
    const skillOrbContainerRef = useRef(null);
    const scrollAidRef = useRef(null);
    const skillDescriptionRef = useRef(null);
    const [showScrollAid, setShowScrollAid] = useState(false);
    const [skillOrbContainerWidth, setSkillOrbContainerWidth] = useState(0);
    const [skillOrbContainerHeight, setSkillOrbContainerHeight] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > (skillOrbContainerRef.current.offsetTop - 450)) {
            return setShowScrollAid(true);
        }
        setShowScrollAid(false);
    };

    useEffect(() => {
        if (isMobile) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    useEffect(() => {
        // fail-safe in case user navigates back from an open image swiper without closing it first
        document.documentElement.style.overflowY = 'auto';

        // Finish animation
        document.body.classList.remove('fadeOut');

        // Checks if it's mobile
        setIsMobile(isMobileCheck());

        // Animations
        gsap.fromTo([
            titleRef.current,
            photoRef.current,
            ...descriptionRef.current.children,
        ], {
            opacity: 0,
            x: 0,
            y: -100
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: {
                amount: 0.5
            },
            delay: 0.5,
            scrollTrigger: {
                trigger: descSectionRef.current,
                toggleActions: 'play reverse play reverse'
            }
        });

        gsap.from(scrollDownIconRef.current, {
            display: 'none',
            delay: 0,
            ease: Power3.easeIn,
            scrollTrigger: {
                trigger: titleRef.current,
                toggleActions: 'play reverse reverse reverse'
            }
        });

        gsap.fromTo([...skillDescriptionRef.current.children], {
            opacity: 0,
            x: 0,
            y: -100
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: {
                amount: 0.5
            },
            delay: 0.5,
            scrollTrigger: {
                trigger: skillDescriptionRef.current,
                start: 'top center',
                toggleActions: 'play reverse play reverse'
            }
        });
    }, []);

    useEffect(() => {
        // Sets background animation (skillorbs) width & height
        // based off of the parent div
        setSkillOrbContainerWidth(skillOrbContainerRef.current.offsetWidth);
        setSkillOrbContainerHeight(skillOrbContainerRef.current.offsetHeight);
    }, [skillOrbContainerRef]);

    return (
        <>

            <Nav />
            <Layout title='About Gustavo Máximo'>

                <DS.Container>
                    <DS.Title ref={titleRef}>About Me</DS.Title>

                    <S.Section ref={descSectionRef}>
                        <S.Photo ref={photoRef}>
                            <img src='/images/Gustavo_Maximo_at_NASP.jpg' data-tip="Photo was taken at Natura NASP" />
                        </S.Photo>
                        <S.Description ref={descriptionRef}>
                            <p>Howdy, my name is <strong>Gustavo Máximo.</strong></p>
                            <p>I&apos;m a JavaScript developer with <strong>3 years of experience</strong> coding both front and back-end.</p>
                            <p>I&apos;m currently located in Jundiaí, Brazil, but <strong>remote work has always been a part of my career.</strong></p>
                            <p>I like to solve difficult problems and flex logic like it&apos;s a muscle. No pain no gain.</p>
                            <p>I&apos;ve worked on projects ranging from ERPs to full-blown mobile and web applications. <strong>B2B, B2C and C2C.</strong></p>
                            <p>My prefered method of working is <strong>Agile & SCRUM.</strong> But I&apos;m well familiarized with Kanban and Waterfall.</p>
                        </S.Description>
                    </S.Section>

                    {!isMobile && (
                        <ScrollDownIcon ref={scrollDownIconRef} />
                    )}

                    <S.SkillSection>
                        <S.SkillDescription ref={skillDescriptionRef}>
                            <DS.Title>Skills</DS.Title>

                            <p>
                                My preferred front-end stack is&nbsp;
                                <S.Highlight>React.js + Next.js + Styled-Components.</S.Highlight>
                            </p>
                            <p>
                                On the back-end&nbsp;
                                <S.Highlight>Node.js + Express.js + Mongoose + GraphQL.</S.Highlight>
                            </p>
                            <p>
                                These stacks are a culmination of best tools and practices
                                I&apos;ve adopted from the places and projects I&apos;ve worked on.
                            </p>
                            <p>
                                I&apos;ve come to prefer and personally adopt&nbsp;
                                <S.Highlight>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.conventionalcommits.org/en/v1.0.0/">
                                        Semantic/Conventional Commits
                                    </a>
                                </S.Highlight>
                                &nbsp;together with&nbsp;
                                <S.Highlight>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">
                                        Gitflow Workflow
                                    </a>
                                </S.Highlight>
                                &nbsp;as
                              my main form of collaborating on projects as it ensures steady,
                               transparent teamwork and a has a clearer / easier to understand client presentation and trackability, making it possible
                              for POs and PMs to pinpoint the exact progress of the current sprint without needing extra technical knowledge.
                            </p>
                            <p>
                                Despite my professional history I was never too fond of mobile development, I&apos;ve worked on&nbsp;
                                <S.Highlight>
                                    React Native
                                </S.Highlight>
                                &nbsp;projects due to high-grade pay (everyone has their price). But personally I prefer Web App and PWA development.
                            </p>
                            <p>
                                Evaluate me technically @:
                            </p>
                            <p>
                                <S.Highlight>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/GoldenMaximo">
                                        GitHub
                                    </a>
                                </S.Highlight>
                                &nbsp;/&nbsp;
                                <S.Highlight>
                                    <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/goldenmaximo/">
                                        LeetCode
                                    </a>
                                </S.Highlight>
                                &nbsp;/&nbsp;
                                <S.Highlight>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/GoldenMaximo/completed">
                                        CodeWars
                                    </a>
                                </S.Highlight>
                            </p>
                        </S.SkillDescription>
                        <S.SkillOrbContainer ref={skillOrbContainerRef}>
                            <SkillOrb height={skillOrbContainerHeight} width={skillOrbContainerWidth}/>
                            {showScrollAid && (
                                <S.ScrollAid ref={scrollAidRef}>Touch to Scroll</S.ScrollAid>
                            )}
                        </S.SkillOrbContainer>
                    </S.SkillSection>

                </DS.Container>
                <Footer />

            </Layout>
        </>
    );
};

export default About;