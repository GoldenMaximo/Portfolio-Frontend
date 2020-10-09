import PropTypes from 'prop-types';
import * as S from './styles';

export const Featured = ({ projects }) => {
    return (
        <S.StyledSection>
            <S.Title>
                <h1>F E A T U R E D</h1>
            </S.Title>
            <S.ProjectsContainer>
                {projects ?
                    projects.map(e => (
                        <S.ProjectThumb key={e._id}>
                            <S.StyledImage src={e.thumbUrl} />
                            <S.ProjectTitle>
                                {e.title}
                            </S.ProjectTitle>
                        </S.ProjectThumb>
                    )) : (
                        <p>Loading</p>
                    )
                }
            </S.ProjectsContainer>
        </S.StyledSection>
    );
};

Featured.propTypes = {
    projects: PropTypes.array,
};

// This gets called on every request
// This shit not working because its not a page
