import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Outlet } from 'react-router-dom';
import styles from './app-header.module.css';
import Navigation from '../navigation/navigation';

const setActiveLink = ({ isActive }) => isActive ? `${ styles.navigationLink_active }  pt-4 pr-5 pb-4 pl-5  text text_type_main-default`
    :
    `${ styles.navigationLinkInactive } pt-4 pr-5 pb-4 pl-5  text text_type_main-default text_color_inactive`;

const AppHeader = ({ path }) => {
    const locationMain = path === "/";
    const locationOrder = path === "/order";
    const locationAccount = path === "/account";
    return (
        <>
            <header className={ styles.header }>
                <Navigation>
                    <div className={ styles.headerMenu }>
                        <NavLink
                            className={ setActiveLink }
                            to="/">
                            { locationMain && <BurgerIcon type="primary"/> }
                            { !locationMain && <BurgerIcon type="secondary"/> }
                            Конструктор
                        </NavLink>
                        <NavLink
                            className={ setActiveLink }
                            to="/order">
                            { locationOrder && <ListIcon type="primary"/> }
                            { !locationOrder && <ListIcon type="secondary"/> }
                            Лента заказов
                        </NavLink>
                    </div>
                    <Logo/>
                    <NavLink
                        className={ setActiveLink }
                        to="/account">
                        { locationAccount && <ProfileIcon type="primary"/> }
                        { !locationAccount && <ProfileIcon type="secondary"/> }
                        Личный кабинет
                    </NavLink>
                </Navigation>
            </header>
            <Outlet/>
        </>
    );
}

export default AppHeader;
