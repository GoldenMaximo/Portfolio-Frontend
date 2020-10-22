import { Fragment, useEffect, useState } from 'react';
import * as S from './styles';
import { FaWhatsappSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiReact, SiNodeDotJs, SiGraphql, SiNextDotJs, SiMongodb } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';
import ReactToolip from 'react-tooltip';
import { isMobile as isMobileCheck } from '../../util/isMobile';

const currentYear = new Date().getUTCFullYear();
// heh John Oliver

export const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileCheck());
    }, []);

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

    return (
        <Fragment>
            <ToastContainer />
            <ReactToolip uuid="tooltip" type="light" />

            <S.container>
                <S.subContainerLeft>
                    <h3>Contact Info</h3>
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
                </S.subContainerLeft>

                <S.subContainerMiddle>
                    <h3>Powered by</h3>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
                            <SiReact color="#61DAFB" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
                            <SiNextDotJs color="#000000" />
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
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/GoldenMaximo">
                                <FaGithubSquare />
                            </a>
                        </S.highLightIcon>
                        <S.highLightIcon iconColor="#0077B5" dropShadow>
                            {/* TODO: Add linkedin link */}
                            <a target="_blank" rel="noopener noreferrer" href="https://goldenmaximo.github.io/curriculum-vitae/">
                                <FaLinkedin />
                            </a>
                        </S.highLightIcon>
                    </S.clickable>
                </S.subContainerRight>

            </S.container>
            <S.copyrightContainer>
                <p>© {currentYear} Gustavo Máximo - All rights reserverd.</p>
            </S.copyrightContainer>
        </Fragment>
    );
};