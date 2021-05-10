import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    visibility: visible;
    background-color: #ffffff;
    z-index: -1;
`;

export const BackgroundFilter = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url('/images/bg/noise-transparent.png') 0 0 repeat;
    background-color: black;
    background-repeat: repeat;
    animation: bg-animation 0.2s infinite;
    opacity: 0.9;
    visibility: visible;

    @keyframes bg-animation {
        0% {
            transform: translate(0, 0);
        }
        10% {
            transform: translate(-5%, -5%);
        }
        20% {
            transform: translate(-10%, 5%);
        }
        30% {
            transform: translate(5%, -10%);
        }
        40% {
            transform: translate(-5%, 15%);
        }
        50% {
            transform: translate(-10%, 5%);
        }
        60% {
            transform: translate(15%, 0);
        }
        70% {
            transform: translate(0, 10%);
        }
        80% {
            transform: translate(-15%, 0);
        }
        90% {
            transform: translate(10%, 5%);
        }
        100% {
            transform: translate(5%, 0);
        }
    }
`;

export const Title = styled.div`
    padding: 6rem;

    @media (max-width: 1366px) {
        padding: 4rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 0;
        color: #e8e6e3;
    }

    &:hover {
        cursor: default;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

// color: #e8e6e3;
// color: #131516;

export const PreventHoverOverlay = styled.div`
    width: 100%;
    min-height: 120vh;
    z-index: 1;
    position: absolute;
    display: none;
`;

// box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

export const AllProjects = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 3rem;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    @keyframes distort {
        0% {
            text-shadow: 5px 4px #f44336, -5px -6px #2196f3, 0 0 20px black;
        }
        25% {
            text-shadow: -5px -6px #f44336, 5px 4px #2196f3, 0 0 20px black;
        }
        50% {
            text-shadow: 5px -4px #f44336, -8px 4px #2196f3, 0 0 20px black;
        }
        75% {
            text-shadow: -8px -4px #f44336, -5px -4px #2196f3, 0 0 20px black;
        }
        100% {
            text-shadow: -5px 0 #f44336, 5px -4px #2196f3, 0 0 20px black;
        }
    }

    @keyframes distortLite {
        0% {
            text-shadow: 3px 2px #f4403480, -3px -4px #2094f380;
        }
        25% {
            text-shadow: -3px -4px #f4403480, 3px 2px #2094f380;
        }
        50% {
            text-shadow: 3px -2px #f4403480, -6px 2px #2094f380;
        }
        75% {
            text-shadow: -6px -2px #f4403480, -3px -2px #2094f380;
        }
        100% {
            text-shadow: -3px 0 #f4403480, 3px -2px #2094f380;
        }
    }

    @keyframes pulseTwo {
        0% {
            text-shadow: 0 0 0px white;
        }
        100% {
            text-shadow: 0 0 30px white;
        }
    }

    h3 {
        pointer-events: none;
        transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: absolute;
        font-style: italic;
        text-decoration: underline;
        text-underline-position: under;
        color: #e8e6e3;

        &:first-of-type {
            pointer-events: all;
            display: contents;
            padding: 2rem;
            animation: distortLite 400ms infinite;

            &:hover {
                animation: distort 225ms infinite;
            }
        }

        &:last-of-type {
            text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
        }
    }

    @media (max-width: 768px) {
        padding: 6rem;
    }
`;
