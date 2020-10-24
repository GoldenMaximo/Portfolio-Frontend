import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/intro.jpg');

    p {
        color: white;
    }

    a {
        font-style: italic;
        font-weight: bold;
        text-shadow: 0 0 3px #000000;
        background-color: rgb(255 255 255 / 0.5);
        border: 1px solid rgb(0 0 0 / 0.3);
        cursor: pointer;
        z-index: 1;
        padding: 1.2rem;
        padding-top: 1.4rem;
        padding-bottom: 1.4rem;
        box-shadow: 0 0 20px 0px white, inset 0 0 20px 0px white;
        border-radius: 0;
        font-size: 0.875rem;
        color: white;
        margin: 0;
        outline: 0;
        white-space: nowrap;
        transition: color 0.15s ease,border 0.15s ease,background-color 0.15s ease;
    }

    a:hover {
        border: 1px solid #1b1b1b;
        background-color: #ffffff;
        color: #000000;
        cursor: pointer;
        text-shadow: 0 0 10px black;
    }
`;