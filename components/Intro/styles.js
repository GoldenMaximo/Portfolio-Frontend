import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        background-color: #00000080;
        border-radius: 0;
        font-size: 0.875rem;
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
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        box-shadow: 0 0 20px 12px rgb(255 255 255 / 0.05), inset 0 0 20px 0px hsl(0 0% 100% / 0.1);
        backdrop-filter: blur(1px);

        @media(max-width: 768px) {
            box-shadow: 0 0 20px 12px rgb(255 255 255 / 0.1), inset 0 0 20px 0px hsl(0 0% 100% / 0.2);
        }
    }

    a:hover {
        border: 1px solid #ffffff;
        color: #ffffff;
        cursor: pointer;
        text-shadow: 0 0 10px black;
        box-shadow: 0 0 20px 12px rgb(255 255 255 / 0.2), inset 0 0 20px 0px hsl(0 0% 100% / 0.5);
    }

    a:active {
        box-shadow: 0 0 20px 12px rgb(0 0 0 / 20%), inset 0 0 20px 16px hsl(0deg 0% 0%);
    }
`;

export const NameContainer = styled.div`
    background-color: hsl(0deg 0% 0% / 50%);
    border: 1px solid white;
    margin: 1rem;
    backdrop-filter: blur(1px);
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