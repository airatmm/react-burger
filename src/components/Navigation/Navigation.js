import navigation from './navigation.module.css';

const Navigation = ({ children }) => {
    return (
        <nav className={navigation.navigation}>
            {children}
        </nav>
    );
}
export default Navigation;
