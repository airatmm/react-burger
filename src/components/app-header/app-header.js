import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import Navigation from '../navigation/navigation';

const navigationLinkInActive = `${ styles.navigationLinkInactive } pt-4 pr-5 pb-4 pl-5  text text_type_main-default text_color_inactive`;
const navigationLinkActive = `${ styles.navigationLinkActive }  pt-4 pr-5 pb-4 pl-5  text text_type_main-default`;

const AppHeader = () => {

    return (
        <>
            <header className={ styles.header }>
                <Navigation>
                    <div className={ styles.headerMenu }>
                        <NavLink
                            className={ navigationLinkInActive }
                            activeClassName={ navigationLinkActive }
                            to="/"
                            exact={ true }>
                            <BurgerIcon type="primary" />
                            Конструктор
                        </NavLink>
                        <NavLink
                            className={ navigationLinkInActive }
                            activeClassName={ navigationLinkActive }
                            to="/order"
                            exact={ true }>
                            <ListIcon type="primary" />
                            Лента заказов
                        </NavLink>
                    </div>
                    <div className={ styles.logo }><Logo /></div>
                    <NavLink
                        className={ navigationLinkInActive }
                        activeClassName={ navigationLinkActive }
                        to="/profile">
                        <ProfileIcon type="primary" />
                        Личный кабинет
                    </NavLink>
                </Navigation>
            </header>
        </>
    );
}

export default AppHeader;
