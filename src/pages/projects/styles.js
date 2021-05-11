import styled from 'styled-components';

export const Tags = styled.div`
    color: whitesmoke;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 0px 20px #00000080;
    z-index: 1;
    flex-wrap: wrap;
    width: 75%;
`;

export const TagButton = styled.p`
    pointer-events: all;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-shadow: 0px 0px 1px rgb(0 0 0 / 0.5), 0px 0px 20px rgb(0 0 0 / 0.5);

    &:hover {
        cursor: pointer;

        text-shadow: 0px 0px 12px #ffffff80, 0px 0px 45px #ffffff80;
    }
`;

export const TagDivider = styled.span`
    padding: 0.5rem;

    cursor: default;
`;

export const ProjectsGallery = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    margin-top: 3rem;

    @media (max-width: 768px) {
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
    box-shadow: -12px 5px 4px 0 rgba(0, 0, 0, 0.5);
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
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-sizing: border-box;
    border-radius: 2px;

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
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI;
        padding: 0;
    }
`;

export const ProjectImage = styled.div`
    background: #fffbfa;
    width: 252px;
    height: 142px;
    margin-right: 70px;
    position: relative;
    border-radius: 3px;
    box-shadow: -12px 5px 4px rgba(0, 0, 0, 0.1), -12px 5px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const ProjectThumb = styled.div`
    opacity: 0;
    position: relative;
    margin-bottom: 6.5rem;
    background: none;
    width: 16rem;
    height: fit-content;
    margin-top: 1rem;
    margin-right: 2rem;
    margin-left: 3rem;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    pointer-events: all;

    &:hover {
        ${ProjectInfo} {
            top: -20px;
            box-shadow: -12px -12px 4px 0 rgba(0, 0, 0, 0.5);
            height: 232px;
        }

        ${ProjectImage} {
            box-shadow: -12px -12px 4px rgba(0, 0, 0, 0.1), -12px -12px 30px rgba(0, 0, 0, 0.1);
        }
    }
`;

// box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

export const StyledImage = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 100%;
`;

export const FiltersBtn = styled.button`
    pointer-events: all;
    color: whitesmoke;
    font-style: italic;
    font-weight: bold;
    text-shadow: 0 0 6px #00000080;
    background-color: #ffffff00;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid rgb(255 255 255 / 0.5);
    cursor: pointer;
    z-index: 1;
    backdrop-filter: blur(2px);

    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:focus {
        outline: none;
    }

    box-shadow: 0px 0px 20px 0px #0000001a;

    &:hover {
        box-shadow: 0 0 20px 0px #ffffff1a, inset 0 0 8px 0px #ffffff33;
    }

    &:active {
        box-shadow: 0px 0px 20px 0px #ffffff1a, inset 0px 0px 20px #00000033;
    }
`;

export const TagsTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    border-bottom: 1px solid whitesmoke;
`;

export const TagsTitle = styled.h3`
    text-shadow: 0px 0px 1px #00000080;
    color: whitesmoke;
    margin: 0;
`;

export const ProjectsContainer = styled.div`
    pointer-events: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1),
        inset 0 1px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    border: 1px solid rgb(245 245 245 / 0.5);
    backdrop-filter: ${({ isMobile }) => (isMobile ? 'none' : 'blur(2px)')};
    margin-bottom: 4rem;
    margin-top: 6rem;
    border-radius: 0.5rem;
    background-color: rgb(0 0 0 / 10%);
`;
