import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NameContainer = styled.div`
    background-color: #00000080;
    border: 1px solid white;
    margin: 1rem;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
`;

export const Name = styled.p`
    color: #f3f3f3;
    font-size: 6rem;
    font-family: 'Poiret One', cursive;
    text-shadow: 0px 0px 13px #ffffff;
    transform: translate(0px, 0px);
    opacity: 1;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Discover = styled.a`
    background-color: #00000080;
    text-shadow: 0px 0px 13px #ffffff;
    border: 1px solid white;
    color: white;
    margin: 0;
    padding: 1rem 1.2rem;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-shadow: 0 0 20px 12px rgb(255 255 255 / 0.05), inset 0 0 20px 0px hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(2px);

    @media(max-width: 768px) {
        box-shadow: 0 0 20px 12px rgb(255 255 255 / 0.1), inset 0 0 20px 0px hsl(0 0% 100% / 0.2);
    }

    &:hover {
        border: 1px solid #ffffff;
        color: #ffffff;
        cursor: pointer;
        text-shadow: 0 0 10px black;
        box-shadow: 0 0 120px 15px #ffffff4d, inset 0 0 20px 0px #ffffff80;
    }

    &:active {
        box-shadow: 0 0 20px 12px rgb(0 0 0 / 20%), inset 0 0 20px 16px hsl(0deg 0% 0%);
    }
`;