import styles from './navigation.module.css';

const Navigation = ({ children }) => {
    return (
        <nav className={ styles.navigation }>
            { children }
        </nav>
    );
}
export default Navigation;
