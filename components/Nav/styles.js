import  styled from 'styled-components';

export const Container = styled.div`
    height: 3rem;
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SubContainerLeft = styled.div`
    width: 25%;
    display: flex;
    justify-content: flex-end;
    h3 {
        font-family: 'UnifrakturCook', cursive;
        color: ${props => props.light ? 'white' : 'black'};
        cursor: pointer;
        transition: all 0.1s ease-out;
    }
`;


export const SubContainerMiddle = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
        color: ${props => props.light ? 'white' : 'black'};
        text-decoration: none;
        transition: all 0.25s ease;
        padding: 0.6rem;
    }

    a:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    a:after {
        opacity: 0;
        background-color: ${props => props.light ? 'white' : 'black'};
        content: " ";
        display: block;
        height: 1px;
        transition: all 0.25s ease;
        margin-right: 0%;
        animation: slideAfter 5s ease-out infinite 3s;
    }

    a:hover:after {
        opacity: 1 !important;
        margin-top: 0.3rem;
        margin-right: 0% !important;
        margin-left: 0% !important;
    }

    @keyframes slideAfter {
        0% {
            opacity: 1;
            margin-right: 100%;
            margin-left: 50%;
        }
        25% {
            margin-right: 50%;
            margin-left: 50%;
        }
        50% {
            margin-right: 0%;
            margin-left: 0%;
        }
        75% {
            margin-right: 0%
            margin-left: 50%;
        }
        100% {
            opacity: 0;
            margin-right: 0%
            margin-left: 100%;
        }
    }
`;

export const SubContainerRight = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.light ? 'white' : 'black'};

    a {
        margin-top: 0.3rem;
        margin-right: 3.5rem;
        transition: all 0.25s ease;
    }

    a:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    a:after {
        opacity: 0;
        background-color: ${props => props.light ? 'white' : 'black'};
        content: " ";
        display: block;
        height: 1px;
        transition: all 0.25s ease;
    }

    a:hover:after {
        opacity: 1;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;