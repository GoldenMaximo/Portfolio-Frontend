import PropTypes from 'prop-types';
import { useRef, useEffect, useState, createRef } from 'react';
import gsap from 'gsap';
import React from 'react';
import * as S from './styles';

export const Featured = ({ projects }) => {
    // const elemRefs = useRef(null);

    const anim = (params, i) => {
        console.log('here yo: ', params);
        const e = params.currentTarget;
        gsap.to(e, {
            duration: 0.5,
            opacity: 0,
            x: 0,
            y: -100
        });

        setTimeout(() => {
            e.remove();
        }, 600);
    };

    const arrLength = projects.length;
    const [elRefs, setElRefs] = React.useState([]);

    React.useEffect(() => {
        // add or remove refs
        setElRefs(elRefs => (
            Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [arrLength]);

    return (
        <S.StyledSection>
            <S.Background>
                <S.BackgroundFilter />
            </S.Background>
            <S.Title>
                <h1>F E A T U R E D</h1>
            </S.Title>
            <S.ProjectsContainer >
                {projects ?
                    projects.map((e, i) => (
                        <S.ProjectThumb onClick={(e) => anim(e, i)} key={e._id} ref={elRefs[i]}>
                            <S.StyledImage src={e.thumbUrl} mobileImg={e.isMobile}/>
                            <S.ProjectTitle>
                                {e.title}
                            </S.ProjectTitle>
                        </S.ProjectThumb>
                    )) : (
                        // TODO: toast if it doesn't load, server has issues or whatever
                        // TODO: Add loading gif - needs to be big and exquisite
                        <p>Loading</p>
                    )
                }
            </S.ProjectsContainer>
            <S.AllProjects>
                <a target="_blank" rel="noopener noreferrer" href="https://graphql.org/">
                    <h1>ALL PROJECTS →</h1>
                </a>
            </S.AllProjects>
        </S.StyledSection>
    );
};

Featured.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        thumbUrl: PropTypes.string,
        isMobile: PropTypes.bool
    })),
};

// This gets called on every request
// This shit not working because its not a page
