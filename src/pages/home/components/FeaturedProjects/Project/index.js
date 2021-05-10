import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { TSParticlesWrapper } from '../../../../../../components';

import * as S from './styles';

export const Project = ({ project, onClick, elemRef, formattedTechStack }) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const isMountedVal = useRef(1);

    useEffect(() => {
        isMountedVal.current = 1;

        return () => {
            isMountedVal.current = 0;
        };
    });

    const updateState = callback => {
        if (isMountedVal.current) {
            callback();
        }
    };

    return (
        <S.ProjectThumbContainer
            onClick={event => onClick(event, project.slug)}
            onMouseOver={() => updateState(() => setShowAnimation(true))}
            onMouseLeave={() => updateState(() => setShowAnimation(false))}
        >
            <S.ProjectThumb ref={elemRef}>
                {showAnimation && (
                    <TSParticlesWrapper
                        height={elemRef?.current?.offsetHeight || 200}
                        style={0}
                        id={project.slug}
                        techStack={project.techStack}
                    />
                )}
                <S.StyledImage src={project.thumbUrl} />
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                <S.Tags>[&nbsp;{formattedTechStack}...&nbsp;]</S.Tags>
            </S.ProjectThumb>
        </S.ProjectThumbContainer>
    );
};

Project.propTypes = {
    project: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        thumbUrl: PropTypes.string,
        techStack: PropTypes.arrayOf(PropTypes.string),
    }),
    formattedTechStack: PropTypes.string,
    elemRef: PropTypes.shape({
        current: PropTypes.shape({
            offsetHeight: PropTypes.number,
        }),
    }),
    onClick: PropTypes.func,
    index: PropTypes.number,
};
