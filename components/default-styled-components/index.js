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

    text-shadow: ${props => props.shadow ? '0px 0px 20px #00000080' : ''};
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