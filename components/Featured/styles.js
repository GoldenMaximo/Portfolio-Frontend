import styled from 'styled-components';

export const StyledSection = styled.div`
    width: 100%;
    min-height: 120vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.div`
    padding: 6rem;

    @media(max-width: 1366px) {
        padding: 4rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 0;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProjectTitle = styled.p`
    height: 20%
`;

export const ProjectThumb = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;

    @media(max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

export const StyledImage = styled.img`
    width: 95%;
    height: 75%;
    margin-top: 5%;
    box-shadow: 0 0px 0px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;