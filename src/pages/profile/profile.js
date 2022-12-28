import styles from './profile.module.css';
import ProfileLink from "./profile-link/profile-link";
import { Route, Switch } from "react-router-dom";
import Orders from "./orders/orders";
import ProfileUser from "./profile-user/profile-user";
import { useDispatch } from "react-redux";
import { logout } from "../../services/slices/logout-slice";

const Profile = () => {

    return (
        <main className={ styles.main }>
            <ProfileLink />
            <div className={ styles.content }>
                <Switch>
                    <Route path='/profile' exact={ true }>
                        <ProfileUser />
                    </Route>
                    <Route path='/profile/orders' exact={ true }>
                        <Orders />
                    </Route>
                </Switch>
            </div>
        </main>

    )
}

export default Profile;
