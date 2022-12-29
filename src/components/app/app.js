import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllIngredientsData } from "../../services/slices/ingredients-slice";
import Loader from "../loader/loader";
import { Login, Profile, Registration, ForgotPassword, ResetPassword } from "../../pages";
import { ProtectedRoute } from "../protected-route/protected-route";
import { getUserData } from "../../services/slices/get-user-data-slice";

const App = () => {
    const isIngredients = useSelector(store => store.ingredients.itemsSuccess)
    const dispatch = useDispatch();

    const isLogged = useSelector(store => store.user.isLogged)
    console.log(isLogged)

    useEffect(() => {
        if (!isLogged && localStorage.getItem('refreshToken')) {
            dispatch(getUserData());
        }
    }, [dispatch,isLogged]);

    useEffect(() => {
        dispatch(getAllIngredientsData())
    }, [dispatch]);

    return (
        <div className={ styles.app }>
            <BrowserRouter>
                <AppHeader />
                <Switch>
                    <Route path='/login' exact={ true }>
                        <Login />
                    </Route>
                    <Route path='/registration' exact={ true }>
                        <Registration />
                    </Route>
                    <Route path='/' exact={ true }>
                        { !isIngredients ? <Loader /> : <Constructor /> }
                    </Route>
                    <ProtectedRoute path='/forgot-password' exact={ true }>
                        <ForgotPassword />
                    </ProtectedRoute>
                    <ProtectedRoute path='/reset-password' exact={ true }>
                        <ResetPassword />
                    </ProtectedRoute>
                    <ProtectedRoute path='/profile'>
                        <Profile />
                    </ProtectedRoute>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
