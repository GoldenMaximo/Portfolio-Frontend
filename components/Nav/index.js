// import styles from './styles.module.css';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { IoMdSearch } from 'react-icons/io';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { useRouter } from 'next/router';

gsap.registerPlugin(TextPlugin);

export const Nav = ({ light }) => {
    const name = useRef(null);
    const router = useRouter();

    const onMouseEnterHandler = () => {
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

    const onMouseLeaveHandler = () => {
        gsap.to(name.current, {
            text: {
                value: 'GM',
                speed: 3
            },
            x: 0
        });
    };

    const onClickHandler = () => {
        document.body.classList.add('fadeOut');

        setTimeout(() => {
            document.body.classList.remove('fadeOut');
            router.push('/');
        }, 500);
    };

    return (
        <S.Container light={light}>
            <S.SubContainerLeft
                light={light}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                onClick={onClickHandler}
            >
                <h3 ref={name}>
                        GM
                </h3>
            </S.SubContainerLeft>
            <S.SubContainerMiddle light={light}>
                <a>Projects</a>
                <a>About</a>
            </S.SubContainerMiddle>
            <S.SubContainerRight light={light}>
                <a>
                    <IoMdSearch />
                </a>
            </S.SubContainerRight>
        </S.Container>
    );
};

Nav.propTypes = {
    light: PropTypes.bool,
};