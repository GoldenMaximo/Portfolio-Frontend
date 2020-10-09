import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

export default MyApp;
