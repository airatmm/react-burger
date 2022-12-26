import styles from './profile-link.module.css';
import { NavLink } from "react-router-dom";

const ProfileLink = ({url, title}) => {
    return (
        <li className={ `${styles.item} pt-4 pb-4 ` }>
        <NavLink
            to={url}
            exact={true}
            className={ `${styles.link} text text_type_main-medium text_color_inactive` }
            activeClassName='text text_type_main-medium'>
            {title}
        </NavLink>
        </li>
    )
}

export default ProfileLink;
