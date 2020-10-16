import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Intro, Layout, Nav, Featured, Footer } from '../components';
import GraphQL from '../services/graphql';

const Home = ({ projects }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav light />
            <Layout title={'Gustavo Máximo\'s Projects'}>
                <Intro />
                <Featured projects={projects}/>
                <Footer />
            </Layout>
        </>
    );
};

export async function getStaticProps() {
    const graphqlQuery = {
        query: `
            {
                projects(page: 1) {
                    totalProjects,
                    projects {
                        _id,
                        slug,
                        title,
                        thumbUrl,
                        isMobile
                    }
                }
            }
        `
    };

    const data = await GraphQL(graphqlQuery);

    return { props: { projects: data.projects.projects } };
}

Home.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        thumbUrl: PropTypes.string,
        isMobile: PropTypes.bool
    })),
};

export default Home;