import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Intro, Layout, Nav, Featured, Footer } from '../components';
import GraphQL from '../services/graphql';

const Home = ({ projects }) => {
    const featuredRef = useRef(null);

    const scrollDown = () => {
        const topOfElement = featuredRef.current.offsetTop - (window.outerHeight / 5);

        window.scroll({
            top: topOfElement,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Nav light />
            <Layout title={'Gustavo Máximo\'s Projects'}>
                <Intro onClick={scrollDown} />
                <Featured ref={featuredRef} projects={projects}/>
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