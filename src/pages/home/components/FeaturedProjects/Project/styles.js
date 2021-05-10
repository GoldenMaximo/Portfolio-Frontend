import styled from 'styled-components';

export const StyledImage = styled.img`
    width: 95%;
    height: 75%;
    margin-top: 5%;
    border-radius: 3px;
`;

export const Tags = styled.p`
    display: none;
    height: 20%;
    width: 80%;
    font-weight: 600;
    color: #e8e8e8;
    position: absolute;
`;

export const ProjectTitle = styled.p`
    height: 20%;
    font-weight: 600;
    color: #e8e8e8;
`;

export const ProjectThumb = styled.div`
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 6px;
    background-color: hsl(209deg 34% 47% / 8%);

    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 5px, rgb(0 0 0 / 39%) 0px 1px 20px 8px;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const ProjectThumbContainer = styled.div`
    display: flex;

    @keyframes cursorAnimation {
        0% {
            cursor: url('/images/cursor/1.png'), auto;
        }
        25% {
            cursor: url('/images/cursor/2.png'), auto;
        }
        50% {
            cursor: url('/images/cursor/3.png'), auto;
        }
        75% {
            cursor: url('/images/cursor/4.png'), auto;
        }
        100% {
            cursor: url('/images/cursor/5.png'), auto;
        }
    }

    @keyframes distortGeometry {
        0% {
            transform: skew(0deg);
        }
        25% {
            transform: skew(1.5deg);
        }
        50% {
            transform: skew(-1.5deg);
        }
        75% {
            transform: skew(1.5deg);
        }
        100% {
            transform: skew(0deg);
        }
    }

    animation: distort 0.6s ease-out 0.1s, distortGeometry 0.6s ease-in-out 0.1s;

    &:hover {
        animation: cursorAnimation 0.5s ease infinite;

        ${ProjectThumb} {
            box-shadow: rgba(255, 255, 255, 0.25) 0px 0px 28px 20px,
                rgba(255, 255, 255, 0.22) 0px 2px 200px 10px;
            transform: rotateY(208deg) rotateX(148deg) !important;
        }

        ${ProjectTitle} {
            transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(-10px, 130px) !important;
            font-size: larger;
            margin: 12px;
            color: white;
            text-shadow: 0 0 50px white;
        }

        ${StyledImage} {
            transform: rotateY(185deg) rotateX(150deg) rotateZ(3deg) translate(0px, -135px) !important;
            box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        }

        ${Tags} {
            display: block;
            transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(40px, 85px) !important;
        }

        @media (max-width: 768px) {
            ${ProjectTitle} {
                transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(5px, 100px) !important;
            }

            ${StyledImage} {
                transform: rotateY(191deg) rotateX(150deg) rotateZ(6deg) translate(0px, -125px) !important;
            }

            ${Tags} {
                transform: rotateY(215deg) rotateX(160deg) RotateZ(18deg) translate(25px, 75px) !important;
            }
        }
    }

    opacity: 1;
    &:active {
        ${ProjectThumb} {
            box-shadow: rgba(255, 255, 255, 1) 0px 0px 28px 20px,
                rgba(255, 255, 255, 1) 0px 2px 200px 10px;
        }
    }
`;
