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
    background-color: #111111;
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
    background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
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

export const StyledSection = styled.div`
    width: 100%;
    min-height: 120vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

// color: #e8e6e3;
// color: #131516;

export const ProjectThumb = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    border-radius: 3px;

    @media(max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: rgb(255 255 255 / 25%) 0px 14px 28px 20px, rgb(255 255 255 / 22%) 0px 2px 20px 10px;
        background-color: white;
    }

    &:hover {
        ${ProjectTitle} {
            color: #131516;
        }
        animation: eh 0.5s ease infinite;
    }

    @keyframes eh {
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
`;

// box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

export const StyledImage = styled.img`
    width: 95%;
    height: 75%;
    padding-left: ${props => props.mobileImg ? '35%' : '0'};
    padding-right: ${props => props.mobileImg ? '35%' : '0'};
    margin-top: 5%;
`;

export const AllProjects = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    h1 {
        display: contents;
        padding: 2rem;
        font-style: italic;
        text-decoration: underline;
        text-underline-position: under;
        color: #e8e6e3;
    }

    a:hover {
        text-shadow: 0 0 20px white;
    }
`;