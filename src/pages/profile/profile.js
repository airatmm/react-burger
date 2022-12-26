import styles from './profile.module.css';
import ProfileLink from "./profile-link/profile-link";
import { Route, Switch } from "react-router-dom";
import Orders from "./orders/orders";
import ProfileUser from "./profile-user/profile-user";

const Profile = () => {
    return (
        <main className={ styles.main }>
            <div className={ styles.navbar }>
                <ul className={ styles.links }>
                    <ProfileLink
                        url='/profile'
                        title='Профиль'
                    />
                    <ProfileLink
                        url='/profile/orders'
                        title='История заказов'
                    />
                    <ProfileLink
                        url='/logout'
                        title='Выход'
                    />
                </ul>
                <span className={ `text text_type_main-default text_color_inactive` }>
                    В этом разделе вы можете изменить свои персональные данные
                </span>
            </div>
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
