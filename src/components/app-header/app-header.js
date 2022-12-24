import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import Navigation from '../navigation/navigation';
//import PropTypes from "prop-types";

const navigationLinkActive = `${ styles.navigationLinkActive }  pt-4 pr-5 pb-4 pl-5  text text_type_main-default`;
const navigationLinkInActive = `${ styles.navigationLinkInactive } pt-4 pr-5 pb-4 pl-5  text text_type_main-default text_color_inactive`;
const AppHeader = () => {
    // const locationMain = path === "/";
    // const locationOrder = path === "/order";
    // const locationAccount = path === "/account";

    return (
        <>
            <header className={ styles.header }>
                <Navigation>
                    <div className={ styles.headerMenu }>
                        <NavLink
                            className={ navigationLinkInActive }
                            activeClassName={navigationLinkActive}
                            to="/">
                            <BurgerIcon type="primary" />
                            {/*{ !locationMain && <BurgerIcon type="secondary" /> }*/}
                            Конструктор
                        </NavLink>
                        <NavLink
                            className={ navigationLinkInActive }
                            activeClassName={navigationLinkActive}
                            to="/order">
                            <ListIcon type="primary" />
                            {/*{ !locationOrder && <ListIcon type="secondary" /> }*/}
                            Лента заказов
                        </NavLink>
                    </div>
                    <div className={ styles.logo }><Logo /></div>
                    <NavLink
                        className={ navigationLinkInActive }
                        activeClassName={navigationLinkActive}
                        to="/account">
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
