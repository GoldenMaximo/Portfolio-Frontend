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
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        -o-border-radius: 0;
        border-radius: 0;
        font-size: 0.875rem;
        background-color: transparent;
        border: 1px solid white;
        box-sizing: border-box;
        color: white;
        display: inline-block;
        font-weight: 600;
        height: 56px;
        line-height: 56px;
        margin: 0;
        outline: 0;
        padding: 0 16px;
        white-space: nowrap;
        transition: color 0.15s ease, border 0.15s ease, background-color 0.15s ease;
    }

    a:hover {
        border: 1px solid #1b1b1b;
        background-color: #1b1b1b;
        color: #ffffff;
    }
`;