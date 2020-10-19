import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

export default MyApp;
