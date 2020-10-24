import styled from 'styled-components';

export const Title = styled.h1`
    margin-top: 8rem;
    margin-bottom: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 2em;
    font-family: 'nunito';
    text-align: center;
    letter-spacing: 0.8rem;

    color: ${props => props.light ? 'whitesmoke' : 'black'};
    text-shadow: ${props => props.shadow ? '0px 0px 20px #ffffff99' : ''};
`;

export const Container = styled.div`
    width: 100%;
    min-height: 120vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: ${props => props.bgColor ? props.bgColor : ''};
`;

export const Backdrop = styled.div`
    height: ${() => document.body.scrollHeight}px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${props => props.dark ? '#000000f2' : '#00000080'};
    top: 0;
    bottom: 0;
    z-index: 2;
`;