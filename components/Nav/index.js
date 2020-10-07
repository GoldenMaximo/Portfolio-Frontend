import styles from './styles.module.css';
import PropTypes from 'prop-types';


const Nav = ({ home }) => {
    return (
        <div className={styles.container}>
            <div className={styles.corner}>
                GM
            </div>
            <div className={styles.middle}>
                <a>Projects</a>
                <a>About</a>
            </div>
            <div className={`${styles.corner} ${styles.rightCorner}`}>
                {
                    !home ? (
                        <img src="/icons/magnifying-glass-white.png" />
                    ) : (
                        <img src="/icons/magnifying-glass-black.png" />
                    )
                }
            </div>
        </div>
    );
};

Nav.propTypes = {
    home: PropTypes.bool,
};

export default Nav;