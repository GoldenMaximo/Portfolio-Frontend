import styled, { css } from 'styled-components';

export const Container = styled.div`
    p {
        position: absolute
    }
`;

const arrow = css`
    opacity: 0;
    position: absolute;
        left: 50%;
        top: 95%;
    transform-origin: 50% 50%;
    transform: translate3d(-50%, -50%, 0);

    &:before {
        background: black;
        content: '';
        display: block;
        height: 3px;
        position: absolute;
            top: 0;
            left: 0;
        width: 30px;

        transform: rotate(45deg) translateX(-23%);
        transform-origin: top left;
    }

    &:after {
        background: black;
        content: '';
        display: block;
        height: 3px;
        position: absolute;
            top: 0;
            left: 0;
        width: 30px;

        transform: rotate(-45deg) translateX(23%);
        transform-origin: top right;
    }


    @keyframes arrow-movement {
        0% {
            opacity: 0;
            top: 90%;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const arrowFirst = styled.div`
    ${arrow};

    animation: arrow-movement 2s ease-in-out infinite;
`;

export const arrowSecond = styled.div`
    ${arrow};

    animation: arrow-movement 2s 1s ease-in-out infinite;
`;