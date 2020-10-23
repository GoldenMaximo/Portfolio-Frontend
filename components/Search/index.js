import * as DS from '../default-styled-components';
import * as S from './styles';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { navigateWithTransition } from '../../util/utilFuncs';
import { useState } from 'react';

export const Search = ({ onClose }) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    const execSearch = event => {
        if (event.key !== 'Enter') return;

        onClose();
        navigateWithTransition(router, `/projects?search=${searchTerm}`);
    };

    return (
        <>
            <DS.Backdrop dark onClick={onClose} />
            <S.SearchContainer top={window.scrollY}>
                <S.SearchInput autoFocus={true} onChange={e => setSearchTerm(e.target.value)} onKeyPress={execSearch} />
            </S.SearchContainer>
        </>
    );
};

Search.propTypes = {
    onClose: PropTypes.func
};