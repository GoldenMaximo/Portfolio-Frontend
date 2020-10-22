import styled from 'styled-components';

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 0px 20px #00000080;
    z-index: 1;
`;

export const TagButton = styled.p`
    &:hover {
        cursor: pointer;

        text-shadow: 0px 0px 10px #00000080;
    }
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

export const ProjectInfo = styled.div`
    background: #2d3436;
    box-shadow: -12px 5px 4px 0 rgba(0,0,0,.5);
    width: 252px;
    height: 142px;
    position: absolute;
    left: -16px;
    top: 70px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-start;
    padding: 16px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-sizing: border-box;

    h3 {
        font-size: 1em;
        margin: 0 0 5px;
        width: 100%;
        color: #fff;
        padding: 0;
    }

    p {
        color: #fff;
        font-size: 1em;
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI;
        padding: 0;
    }
`;

export const ProjectThumb = styled.div`
    position: relative;
    min-height: 16rem;
    background: none;
    width: 16rem;
    height: 16rem;
    margin-top: 1rem;
    margin-right: 2rem;
    margin-left: 3rem;
    cursor: pointer;

    &:hover {
        ${ProjectInfo} {
            top: -20px;
            box-shadow: -12px -12px 4px 0 rgba(0,0,0,.5);
            height: 232px;
        }
    }
`;

export const ProjectImage = styled.div`
    background: #fffbfa;
    width: 252px;
    height: 142px;
    margin-right: 70px;
    position: relative;
`;

// box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

export const StyledImage = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 100%;
`;