import Head from 'next/head';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Porfolio in the making. Cool projects on the way." />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="/ogimage.png" />
                <meta property="og:type" content="profile:Gustavo Máximo" />
                <meta property="og:locale" content="en_US" />
                <link rel="icon" href="/favicon.ico" />
                <script src="/js/TagCanvas.js" />
            </Head>
            <div className={styles.wrap}>
                {children}
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
    title: PropTypes.string.isRequired
};