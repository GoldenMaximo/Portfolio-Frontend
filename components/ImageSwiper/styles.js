import styled from 'styled-components';

export const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: ${() => (window.scrollY ? window.scrollY + 'px' : 0)};
    bottom: 0;
    z-index: 1000;
`;

export const SwiperContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    @media (max-width: 768px) {
        width: 100%;
        height: fit-content;
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
        width: ${props => (props.isMobile ? '60%' : '100%')};
        margin: ${props => (props.isMobile ? '0 auto' : '')};
    }
`;
