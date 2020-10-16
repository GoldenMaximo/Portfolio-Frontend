// import styles from './styles.module.css';
import PropTypes from 'prop-types';
import * as S from './styles';
import { IoMdSearch } from 'react-icons/io';

// home for the color I guess
export const Nav = ({ light }) => {
    return (
        <S.Container>
            <S.SubContainerLeft>
                GM
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