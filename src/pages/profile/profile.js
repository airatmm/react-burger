import styles from './profile.module.css';
import ProfileLink from "./profile-link/profile-link";
import { Route, Switch } from "react-router-dom";
import Orders from "./orders/orders";
import ProfileUser from "./profile-user/profile-user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "../../services/slices/get-user-data-slice";

const Profile = () => {
    // const dispatch = useDispatch();
    // const init = async () => {
    //     await dispatch(getUserData());
    //     //setUserLoaded(true);
    // };
    //
    // useEffect(() => {
    //     init();
    // }, []);
    //
    // // useEffect(() => {
    // //     dispatch(getUserData())
    // // }, [dispatch])

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
