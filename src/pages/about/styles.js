import styled, { css } from 'styled-components';
import * as DS from '../../../components/default-styled-components';

const sectionStyles = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 5rem;

    @media(max-width: 768px) {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0rem;
        flex-direction: column;
    }
`;

export const Section = styled.div`
    ${sectionStyles};
`;

export const SkillSection = styled.div`
    ${sectionStyles};

    min-height: 100vh;
`;

export const Photo = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        width: 100%;
        margin-bottom: 3rem;
    }

    img {
        width: 50%;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

        @media(max-width: 768px) {
            width: 80%;
        }

        &:hover {
            cursor: help;
        }
    }
`;

export const Description = styled.div`
    width: 50%;
    padding-left: 8rem;
    padding-right: 8rem;

    @media(max-width: 1366px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media(max-width: 768px) {
        width: 100%;
        padding-left: 0rem;
        padding-right: 0rem;
        text-align: justify;
    }

    strong {
        color: #ffffff;
        background-color: black;
        padding-right: 0.3rem;
        padding-left: 0.3rem;
    }
`;

export const Highlight = styled.strong`
    color: #ffffff;
    background-color: black;
    padding-right: 0.3rem;
    padding-left: 0.3rem;
`;

export const ScrollDown = styled.a`

    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;

    cursor:pointer;
    height: 60px;
    width: 80px;
    margin: 0px 0 0 -40px;
    line-height: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    color: #FFF;
    text-align: center;
    font-size: 70px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

    @-webkit-keyframes ca3_fade_move_down {
        0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -webkit-transform:translate(0,20px); opacity: 0; }
    }
    @-moz-keyframes ca3_fade_move_down {
        0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -moz-transform:translate(0,20px); opacity: 0; }
    }
    @keyframes ca3_fade_move_down {
        0%   { transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { transform:translate(0,20px); opacity: 0; }
    }
`;

export const SkillDescription = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 768px) {
        width: 100%;
        text-align: justify;

        ${DS.Title} {
            margin-top: 6rem;
        }
    }
`;

export const SkillOrbContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    margin-top: 3rem;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 768px) {
        width: 100%;
        margin-top: 0rem;
    }
`;

export const ScrollAid = styled.div`
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 1rem;
    bottom: 4rem;
    width: 33%;
    padding: 0 0.5rem;
    height: 5rem;
    background-color: black;
    position: fixed;
    color: white;
`;