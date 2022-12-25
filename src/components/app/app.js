import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllIngredientsData } from "../../services/slices/ingredients-slice";
import Loader from "../loader/loader";
import { Login, Profile, Registration, ForgotPassword, ResetPassword } from "../../pages";

const App = () => {
    const isIngredients = useSelector(state => state.ingredients.itemsSuccess)
    const dispatch = useDispatch();

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
                    <Route path='/profile' exact={ true }>
                        <Profile />
                    </Route>
                    <Route path='/forgot-password' exact={ true }>
                        <ForgotPassword />
                    </Route>
                    <Route path='/reset-password' exact={ true }>
                        <ResetPassword />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
