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
    animation: bg-animation .2s infinite;
    opacity: .9;
    visibility: visible;

    @keyframes bg-animation {
        0% { transform: translate(0,0) }
        10% { transform: translate(-5%,-5%) }
        20% { transform: translate(-10%,5%) }
        30% { transform: translate(5%,-10%) }
        40% { transform: translate(-5%,15%) }
        50% { transform: translate(-10%,5%) }
        60% { transform: translate(15%,0) }
        70% { transform: translate(0,10%) }
        80% { transform: translate(-15%,0) }
        90% { transform: translate(10%,5%) }
        100% { transform: translate(5%,0) }
    }
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
        color: #e8e6e3;
    }

    &:hover {
        cursor: default;
    }
`;

export const Tags = styled.p`
    display: none;
    height: 20%;
    width: 80%;
    font-weight: 600;
    color: #e8e8e8;
    position: absolute;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProjectTitle = styled.p`
    height: 20%;
    font-weight: 600;
    color: #e8e8e8;
`;

export const StyledImage = styled.img`
    width: 95%;
    height: 75%;
    margin-top: 5%;
    border-radius: 3px;
`;

// color: #e8e6e3;
// color: #131516;

export const ProjectThumb = styled.div`
    pointer-events: all;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    border-radius: 6px;
    background-color: rgb(78 120 160 / 10%);

    @media(max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 5px, rgb(0 0 0 / 39%) 0px 1px 20px 8px;
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
`;

export const ProjectThumbContainer = styled.div`
    display: flex;

    @keyframes cursorAnimation {
        0%{
          cursor: url("/images/cursor/1.png"), auto;
        }
        25%{
          cursor: url("/images/cursor/2.png"), auto;
        }
        50%{
          cursor: url("/images/cursor/3.png"), auto;
        }
        75%{
          cursor: url("/images/cursor/4.png"), auto;
        }
        100%{
          cursor: url("/images/cursor/5.png"), auto;
        }
    }

    &:hover {
        animation: cursorAnimation 0.5s ease infinite;

        ${ProjectThumb} {
            box-shadow: rgba(255, 255, 255, 0.25) 0px 0px 28px 20px, rgba(255, 255, 255, 0.22) 0px 2px 200px 10px;
            transform: rotateY(208deg) rotateX(148deg) !important;
        }

        ${ProjectTitle} {
            transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(-10px,130px) !important;
            font-size: larger;
            margin: 12px;
            color: white;
            text-shadow: 0 0 50px white;
        }

        ${StyledImage} {
            transform: rotateY(185deg) rotateX(150deg) rotateZ(3deg) translate(0px,-135px) !important;
            box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        }

        ${Tags} {
            display: block;
            transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(40px,85px) !important;
        }

        @media(max-width:768px) {
            ${ProjectTitle} {
                transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(5px,100px) !important;
            }

            ${StyledImage} {
                transform: rotateY(191deg) rotateX(150deg) rotateZ(6deg) translate(0px,-125px) !important;
            }

            ${Tags} {
                transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(25px,75px) !important;
            }
        }
    }

    opacity: 1;
    &:active {
        transition: all 0.1s ease;
        ${ProjectThumb} {
            box-shadow: rgba(255, 255, 255, 0.25) 0px 0px 28px 20px, rgba(255, 255, 255, 0.22) 0px 2px 200px 10px;
            transform: rotateY(208deg) rotateX(148deg) translate(-20px,100px) !important;
            transition: all 0.1s ease;
        }
        opacity: 0;
    }
`;

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

    h3 {
        transition: all 0.5s cubic-bezier(.25,.8,.25,1);
        display: contents;
        padding: 2rem;
        font-style: italic;
        text-decoration: underline;
        text-underline-position: under;
        color: #e8e6e3;
    }

    h3:hover {
        text-shadow: 0 0 20px white;
    }

    @media(max-width: 768px) {
        padding: 6rem;

        h3 {
            text-shadow: 0 0 20px white;
        }
    }
`;