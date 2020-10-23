// import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { IoMdSearch } from 'react-icons/io';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';
import { isMobileCheck, navigateWithTransition } from '../../util/utilFuncs';
import * as DS from '../default-styled-components';


gsap.registerPlugin(TextPlugin);

export const Nav = ({ home }) => {
    const name = useRef(null);
    const [showSearch, setShowSearch] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [message, setMessage] = useState('This button goes to the Home page, you\'re alerady here so it doesn\'t do anything I guess');
    const [alternateDesc, setAlternateDesc] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMobile(isMobileCheck());
    }, []);

    useEffect(() => {
        // Alternates messages on the GM logo
        ReactTooltip.rebuild();
    }, [message]);

    useEffect(() => {
        if (showSearch) {
            document.documentElement.style.overflowY = 'hidden';
            return;
        }
        document.documentElement.style.overflowY = 'auto';
    }, [showSearch]);

    const homeOnMouseEnterHandler = () => {
        gsap.fromTo(name.current, {
            opacity: 0
        }, {
            opacity: 1,
            text: {
                value: 'Gustavo Máximo',
                speed: 3
            },
            x: 45
        });
    };

    const homeOnMouseLeaveHandler = () => {
        gsap.to(name.current, {
            text: {
                value: 'GM',
                speed: 3
            },
            x: 0
        });
    };

    const homeOnClickHandler = () => {
        if (home) {
            if (alternateDesc) {
                setMessage('Bruh...');
                setAlternateDesc(false);
                return;
            }

            setMessage('Dude why are you clicking? I just said it doesn\'t do anything');
            setAlternateDesc(true);
            return;
        }

        navigateWithTransition(router, '/');
    };

    const projectsOnClickHandler = () => {
        if (router.pathname === '/projects') return;
        navigateWithTransition(router, '/projects');
    };

    return (
        <>
            {!isMobile && (
                <ReactTooltip uuid="tooltip" type="light" />
            )}

            {showSearch && (
                <>
                    <DS.Backdrop dark onClick={() => setShowSearch(false)} />
                    <S.SearchForm top={window.scrollY}>
                        <S.SearchInput autoFocus={true} />
                    </S.SearchForm>
                </>
            )}

            <S.Container home={home}>
                <S.SubContainerLeft
                    home={home}
                    onClick={homeOnClickHandler}
                    onMouseEnter={homeOnMouseEnterHandler}
                    onMouseLeave={homeOnMouseLeaveHandler}
                    data-tip={home ? message : ''}
                    key={alternateDesc ? message : message}
                >
                    <h3 ref={name}>
                        GM
                    </h3>
                </S.SubContainerLeft>
                <S.SubContainerMiddle home={home}>
                    <a onClick={projectsOnClickHandler}>Projects</a>
                    <a>About</a>
                </S.SubContainerMiddle>
                <S.SubContainerRight home={home}>
                    <a onClick={() => setShowSearch(true)}>
                        <IoMdSearch />
                    </a>
                </S.SubContainerRight>
            </S.Container>
        </>
    );
};

Nav.propTypes = {
    home: PropTypes.bool,
};