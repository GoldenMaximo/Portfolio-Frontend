import styled from 'styled-components';

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TagButton = styled.p`
    cursor: pointer;
`;

export const TagDivider = styled.span`
    padding: 0.5rem;
`;

export const ProjectsGallery = styled.div`
    display: flex;
    width: 75%;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    margin-top: 2rem;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const ProjectTitle = styled.p`
    height: 20%;
    font-weight: 600;
    color: #e8e8e8;
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
    border-radius: 3px;
    background-color: #131516;
    height: 18rem;

    @media(max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        background-color: black;
    }

    &:hover {
        ${ProjectTitle} {
            color: white;
        }
        cursor: pointer;
    }
`;

// box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

export const StyledImage = styled.img`
    width: 95%;
    height: 75%;
    padding-left: ${props => props.mobileImg ? '35%' : '0'};
    padding-right: ${props => props.mobileImg ? '35%' : '0'};
    margin-top: 5%;
`;