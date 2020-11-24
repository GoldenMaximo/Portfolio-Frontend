import {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReactToolip from 'react-tooltip';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        console.log('%cCurious? Take a look at the application\'s repositories for more information.', 'background: #222; padding: 50px; color: #bada55');
        console.log('%cFront-end: https://github.com/GoldenMaximo/Portfolio-Frontend', 'background: #222; padding: 50px; color: #bada55');
        console.log('%cBack-end: https://github.com/GoldenMaximo/Portfolio-Backend', 'background: #222; padding: 50px; color: #bada55');
    }, []);
    return (
        <>
            <ReactToolip uuid="tooltip" type="dark" />
            <Component {...pageProps} />
        </>
    );
};

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

export default MyApp;
