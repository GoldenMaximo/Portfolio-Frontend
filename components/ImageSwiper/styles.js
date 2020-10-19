
import styled from 'styled-components';

export const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: ${props => props.top ? props.top + 'px' : 0};
    bottom: 0;
    z-index: 1000;
`;

export const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #00000080;
    top: 0;
    bottom: 0;
`;

export const SwiperContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const FlexAlignment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        background-color: #f0f8ff7a;
        margin: 0;
        position: absolute;
        bottom: 2rem;
        padding: 1rem;
        left: 0;
    }

    img {
        width: 100%;
    }
`;