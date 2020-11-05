import { Fragment, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { FaWhatsappSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiReact, SiNodeDotJs, SiGraphql, SiNextDotJs, SiMongodb } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';
import ReactToolip from 'react-tooltip';
import { isMobileCheck } from '../../util/utilFuncs';
import ReCAPTCHA from 'react-google-recaptcha';
import gsap, { Linear } from 'gsap';


const currentYear = new Date().getUTCFullYear();
// heh John Oliver

export const Footer = () => {
    const copyright = useRef(null);
    const builtBy = useRef(null);
    const svgIcons = useRef(null);
    const copyrightContainer = useRef(null);
    const githubIcon = useRef(null);
    const linkedinIcon = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [solvedCaptcha, setSolvedCaptcha] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileCheck());
    }, []);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: svgIcons.current,
                start: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        });

        timeline.add(gsap.fromTo([...svgIcons.current.children].map(e => [...e.children]).flat(), {
            x: 0,
            y: '-1rem',
            rotateY: '540deg',
            transformStyle: 'preserve-3d',
            opacity: 0,
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            rotateY: '0deg',
            transformStyle: 'preserve-3d',
            duration: 0.5,
            stagger: {
                amount: 1
            },
        }));
        timeline.add(gsap.from([githubIcon.current, linkedinIcon.current], {
            opacity: 0,
            duration: 0.5,
            y: '-1rem',
            stagger: {
                amount: 0.250
            }
        }));
    }, []);

    useEffect(() => {
        if (isMobile) {
            const tl = gsap.timeline({ repeat: -1 });

            tl.add(gsap.fromTo(copyright.current, {
                x: (copyrightContainer.current.offsetWidth / 1.3)
            }, {
                duration: 6,
                x: -(copyrightContainer.current.offsetWidth / 4),
                ease: Linear.easeIn
            }));

            tl.add(gsap.fromTo(builtBy.current, {
                x: (copyrightContainer.current.offsetWidth / 2)
            }, {
                duration: 6,
                x: -(copyrightContainer.current.offsetWidth / 1.3),
                ease: Linear.easeIn
            }), '>-1');
        }
    }, [isMobile]);

    const mailClickHandler = () => {
        if(isMobile) {
            window.location = `
            mailto:gfmaximo97@gmail.com?subject=Dev Position Oportunity / Business Inquiry&body=Hi, I'm X from X. I just saw your portfolio and would like to know if you're interested in X.
            `;
            return;
        }
        navigator.clipboard.writeText('gfmaximo97@gmail.com');
        toast.dark('📋 Copied to cliboard!');
    };

    const captchaChangeHandler = key => {
        if (key) {
            return setSolvedCaptcha(true);
        }
        setSolvedCaptcha(false);
    };

    return (
        <Fragment>
            <ToastContainer />
            <ReactToolip uuid="tooltip" type="light" />

            <S.container>
                <S.subContainerLeft>
                    <h3>Contact Info</h3>
                    {!solvedCaptcha ? (
                        <ReCAPTCHA
                            sitekey="6LcyBdsZAAAAADAK7H5pM1CLOTF0Dsy8Bch86woQ"
                            onChange={captchaChangeHandler}
                        />
                    ) : (

                        <S.clickable>
                            <S.highLightIcon dropShadow iconColor="#25D366">
                                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5511985383817">
                                    <FaWhatsappSquare width="1.4em" />
                                    <p>+55 (11) 98538-3817</p>
                                </a>
                            </S.highLightIcon>
                            <S.highLightIcon>
                                <a target="_blank" rel="noopener noreferrer" href="https://goldenmaximo.github.io/curriculum-vitae/">
                                    <S.ResumeIcon>
                                        <h1>CV</h1>
                                    </S.ResumeIcon>
                                    <p>Curriculum Vitae</p>
                                </a>
                            </S.highLightIcon>
                            <S.highLightIcon dropShadow iconColor="#D14836">
                                <a data-tip={isMobile ? '' : 'Click to Copy'} onClick={mailClickHandler}>
                                    <FaEnvelopeSquare width="1.4em" />
                                    <p>gfmaximo97@gmail.com</p>
                                </a>
                            </S.highLightIcon>
                        </S.clickable>
                    )}
                </S.subContainerLeft>

                <S.subContainerMiddle>
                    <h3>Powered by</h3>
                    <div ref={svgIcons}>
                        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
                            <SiReact color="#61DAFB" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
                            <SiNextDotJs color="#e8e6e3" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">
                            <SiNodeDotJs color="#339933" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://graphql.org/">
                            <SiGraphql color="#E10098" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/">
                            <SiMongodb color="#47A248" />
                        </a>
                    </div>
                </S.subContainerMiddle>

                <S.subContainerRight>
                    <h3>Social Media</h3>
                    <S.clickable>
                        <S.highLightIcon iconColor="#ffffff" dropShadow>
                            <a ref={githubIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/GoldenMaximo">
                                <FaGithubSquare />
                            </a>
                        </S.highLightIcon>
                        <S.highLightIcon iconColor="#0077B5" dropShadow>
                            <a ref={linkedinIcon} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-maximo-filho">
                                <FaLinkedin />
                            </a>
                        </S.highLightIcon>
                    </S.clickable>
                </S.subContainerRight>

            </S.container>
            <S.copyrightContainer ref={copyrightContainer}>
                <p ref={copyright}>© {currentYear} Gustavo Máximo - All rights reserverd.</p>
                <span ref={builtBy}>Designed and Developed by Gustavo Máximo</span>
            </S.copyrightContainer>
        </Fragment>
    );
};