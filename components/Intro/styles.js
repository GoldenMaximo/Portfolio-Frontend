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
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        box-shadow: 0 0 20px 12px rgb(255 255 255 / 0.05), inset 0 0 20px 0px hsl(0 0% 100% / 0.1);

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