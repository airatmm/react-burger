import styles from './profile.module.css';
import ProfileLink from "./profile-link/profile-link";
import { Redirect, Route, Switch } from "react-router-dom";
import Orders from "./orders/orders";
import ProfileUser from "./profile-user/profile-user";
import { useSelector } from "react-redux";

const Profile = () => {
    const { isLogged } = useSelector(store => store.user)
    console.log(isLogged)
    if (!isLogged) {
        return <Redirect to='/profile' />
    }
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
