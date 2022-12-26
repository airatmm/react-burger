import styles from './profile-link.module.css';
import { NavLink } from "react-router-dom";

const ProfileLink = ({url, title}) => {
    return (
        <NavLink
            to={url}
            exact={true}
            className={ `${styles.link} text text_type_main-medium` }
            activeClassName={styles.link_active} >
            {title}
        </NavLink>
    )
}

export default ProfileLink;
