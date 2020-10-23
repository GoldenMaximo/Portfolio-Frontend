import styled from 'styled-components';

export const SearchInput = styled.input`
    border: none;
    color: white;
    display: block;
    margin: 0 auto;
    width: 80%;
    padding: 15px;
    background: #222222;
    font-size: 1.5em;

    &:focus {
        outline: 1px solid white;
        -moz-outline-radius: 0.2em;
        outline: -webkit-focus-ring-color auto thin;
    }
`;

export const SearchContainer = styled.div`
    position: absolute;
    width: 100%;
    margin-top: ${props => props.top + (window.innerHeight / 8)}px;
    z-index: 3;
`;