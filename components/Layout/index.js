import Head from 'next/head';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { CookiesNotice } from '../CookiesNotice';

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Check out my latest projects and get to know more about me."
                />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="/ogimage.jpg" prefix="og: http://ogp.me/ns#" />
                <meta property="og:type" content="profile:Gustavo Máximo" />
                <meta property="og:locale" content="en_US" />
                <link rel="icon" href="/favicon.ico" />
                <script src="/js/TagCanvas.js" />
            </Head>
            <div className={styles.wrap}>{children}</div>
            <CookiesNotice />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
    title: PropTypes.string.isRequired,
};
