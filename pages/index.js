import { Intro, Layout, Nav, Featured, Footer } from '../components';
import GraphQL from '../services/graphql';

const Home = ({ projects }) => {
    return (
        <>
            <Nav />
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

export default Home;