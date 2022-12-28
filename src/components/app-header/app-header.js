import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from 'react-router-dom';
import styles from './app-header.module.css';
import Navigation from '../navigation/navigation';
//import PropTypes from "prop-types";

const navigationLinkInActive = `${ styles.navigationLinkInactive } pt-4 pr-5 pb-4 pl-5  text text_type_main-default text_color_inactive`;
const navigationLinkActive = `${ styles.navigationLinkActive }  pt-4 pr-5 pb-4 pl-5  text text_type_main-default`;

const AppHeader = () => {
    const pathname = useLocation();
    const locationMain = pathname === "/";
    const locationOrder = pathname === "/order";
    const locationAccount = pathname === "/profile";

    return (
        <>
            <header className={ styles.header }>
                <Navigation>
                    <div className={ styles.headerMenu }>
                        <NavLink
                            className={ navigationLinkInActive }
                            activeClassName={navigationLinkActive}
                            to="/"
                            exact={true}>
                            <BurgerIcon type="primary" />
                            {/*{ !activeClassName ? <BurgerIcon type="primary" /> : <BurgerIcon type="secondary" /> }*/}
                            Конструктор
                        </NavLink>
                        <NavLink
                            className={ navigationLinkInActive }
                            activeClassName={navigationLinkActive}
                            to="/order"
                            exact={true}>
                            <ListIcon type="primary" />
                            {/*{ locationOrder ? <ListIcon type="primary" />:  <ListIcon type="secondary" /> }*/}
                            Лента заказов
                        </NavLink>
                    </div>
                    <div className={ styles.logo }><Logo /></div>
                    <NavLink
                        className={ navigationLinkInActive }
                        activeClassName={navigationLinkActive}
                        to="/profile"
                        exact={true}>
                        <ProfileIcon type="primary" />
                        {/*{ !locationAccount && <ProfileIcon type="secondary" /> }*/}
                        Личный кабинет
                    </NavLink>
                </Navigation>
            </header>
        </>
    );
}

// AppHeader.propTypes = {
//     path: PropTypes.string.isRequired
// }

export default AppHeader;
