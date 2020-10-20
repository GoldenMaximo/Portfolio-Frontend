import styled, { css } from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    margin-top: 8rem;
    margin-bottom: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 2em;
    font-family: 'nunito';
    text-align: center;
    letter-spacing: 0.8rem;
`;

export const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;

    @media(max-width: 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
        flex-direction: column;
    }
`;

export const Details = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;

    div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

    svg {
        margin-right: 4%;
        width: 6%;
    }

    p {
        width: 90%;
        word-break: break-word;
    }

    @media(max-width: 768px) {
        width: 100%;
        padding: 2rem;
        padding-bottom: 4rem;
    }
`;

export const Description = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start !important;
    text-align: justify;

    p {
        width: 100%;
    }
`;

export const ProjectImages = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

const sharedImageStyles = css`
    opacity: 0;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        cursor: pointer;
    }
`;

export const MainImage = styled.img`
    width: 100%;
    margin-bottom: 1rem;

    ${sharedImageStyles}
`;

export const BottomImages = styled.img`
    width: 31%;
    margin-right: 1%;

    ${sharedImageStyles}
`;