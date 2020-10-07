// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
// import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Nav />
            <Layout title={'whatever'}>
                <section className={`${styles.intro} ${styles.section}`}>
                    <p>GUSTAVO MÁXIMO</p>
                    <a href="/products">Projects</a>
                </section>
            </Layout>
        </>
    );
};

export default Home;