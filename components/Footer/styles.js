import styled, { css } from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    width: 100%;
    background-color: #1c1f20;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

// Clickable (icon containers)
export const clickable = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    color: #e8e6e3;

    svg {
        margin-right: 0.5rem;
        width: 2rem;
        height: 2rem;
    }

    p {
        margin: 0;
        color: #e8e6e3;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        &:hover {
            cursor: pointer;
        }
    }
`;

// Subcontainers (3 sections, Contact info - Powered by - Social Media)
const sharedSubContainerStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
`;

export const subContainerMiddle = styled.div`
    ${sharedSubContainerStyles}

    width: 50%;

    h3 {
        margin: 0;
        color: #e8e6e3;
    }

    div {
        margin: auto;

        @media(max-width: 768px) {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    svg {
        width: 4rem;
        height: 4rem;
        margin: 1rem;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        &:hover {
            filter: drop-shadow(0 10px 9px rgba(0,0,0,1));
        }
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const subContainerRight = styled.div`
    ${sharedSubContainerStyles}

    width: 25%;

    h3 {
        margin: 0;
        margin-bottom: 0.5rem;
        color: #e8e6e3;
    }

    svg {
        height: 5rem;
        width: 5rem;
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const highLightIcon = styled.div`
    &:hover {
        color: ${props => props.iconColor ? props.iconColor : '#e8e6e3'};
        filter: ${props => props.dropShadow ? 'drop-shadow(0 10px 9px rgba(0,0,0,1))' : ''};
    }
`;

export const subContainerLeft = styled.div`

    height: 100%;
    width: 25%;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 1rem;

    h3 {
        margin: 0;
        margin-bottom: 0.5rem;
        color: #e8e6e3;
    }

    ${clickable} {
        display: flex;
        justify-content: space-between;
    }

    @media(max-width: 1366px) {
        p {
            display: none;
        }

        text-align: center;

        ${clickable} {
            display: inline-block;
        }

        ${highLightIcon} {
            display: inline-block;
        }

        svg {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
            width: 4rem;
            height: 4rem;
        }
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`;

// Bottom footer with copyright notice
export const copyrightContainer = styled.div`
    width: 100%;
    background-color: #181a1b;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #e8e6e3;
    }
`;