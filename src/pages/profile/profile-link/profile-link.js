import styles from './profile-link.module.css';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/slices/logout-slice";
import { useCallback } from "react";


const className = `${styles.link} text text_type_main-medium text_color_inactive`;
const activeClassName = styles.link_active;
const ProfileLink = () => {
    const dispatch = useDispatch();
    const history = useHistory();

     const handleLogout = useCallback(
        () => {
          dispatch(logout(() => {
            history.replace({ pathname: '/login' });
          }));
        },
        [dispatch, history]
      );

    return (
        <div className={ styles.navbar }>
            <ul className={ styles.links }>
                <li className={ `${styles.item} pt-4 pb-4 ` }>
                    <NavLink
                    to='/profile'
                    exact={true}
                    className={className}
                    activeClassName={  activeClassName}
                    >Профиль</NavLink>
                </li>
                <li className={ `${styles.item} pt-4 pb-4 ` }>
                    <NavLink
                        to='/profile/orders'
                        exact={true}
                        className={className}
                        activeClassName={  activeClassName}
                    >История заказов</NavLink>
                </li>
                <li className={ `${styles.item} pt-4 pb-4 ` }>
                    <button
                        onClick={handleLogout}
                        className={className}
                    >Выход</button>
                </li>
            </ul>
            <span className={ `text text_type_main-default text_color_inactive` }>
                    В этом разделе вы можете изменить свои персональные данные
                 </span>
        </div>
    )
}


export default ProfileLink;
