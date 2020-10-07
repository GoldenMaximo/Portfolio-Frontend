import Head from 'next/head';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
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

export default Layout;