import styles from './navigation.module.css';
import PropTypes from "prop-types";

const Navigation = ({ children }) => {
    return (
        <nav className={ styles.navigation }>
            { children }
        </nav>
    );
}

Navigation.propTypes = {
    children: PropTypes.node.isRequired
}
export default Navigation;
