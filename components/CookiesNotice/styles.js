import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: black;
    width: 100%;
    z-index: 999;
    height: fit-content;
    bottom: 0;

    p {
        color: #ffffff;
        margin: 1rem;
    }

    button {
        margin: 1rem;
        background: whitesmoke;
        border: none;
        border-radius: 4px;
        width: 3rem;
        height: 2rem;
        font-weight: 600;
        cursor: pointer;
    }
`;
