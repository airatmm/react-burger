import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
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
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { removeCurrentIngredient } from "../../services/slices/current-ingredient-slice";
import NotFound from "../not-found/not-found";

const getIngredientsState = (store) => store.ingredients.itemsSuccess;
const isLoggedState = (store) => store.user.isLogged
const currentIngredientState = (store) => store.currentIngredient

const App = () => {
    const location = useLocation()
    const history = useHistory()
    const isIngredients = useSelector(getIngredientsState);
    const isLogged = useSelector(isLoggedState)
    const dispatch = useDispatch();

    const currentIngredient = useSelector(currentIngredientState)
    const background = location.state?.background

    useEffect(() => {
        return background && history.replace({
            pathname: location.pathname,
            state: undefined
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        dispatch(getAllIngredientsData())
    }, [dispatch]);

    useEffect(() => {
        if (!isLogged && localStorage.getItem('refreshToken')) {
            dispatch(getUserData());
        }
    }, [dispatch, isLogged]);

    return (
        <div className={ styles.app }>
            <AppHeader />
            <Switch location={ background || location }>
                <ProtectedRoute
                    path='/login'
                    exact={ true }
                    isAuth={ false }
                    redirectPath='/'
                >
                    <Login />
                </ProtectedRoute>
                <ProtectedRoute
                    path='/registration'
                    exact={ true }
                    isAuth={ false }
                    redirectPath='/'>
                    <Registration />
                </ProtectedRoute>
                <Route path='/' exact={ true }>
                    { !isIngredients ? <Loader /> : <Constructor /> }
                </Route>
                <ProtectedRoute
                    path='/forgot-password'
                    exact={ true }
                    isAuth={ false }
                    redirectPath='/'
                >
                    <ForgotPassword />
                </ProtectedRoute>
                <ProtectedRoute
                    path='/reset-password'
                    exact={ true }
                    isAuth={ false }
                    redirectPath='/'
                >
                    <ResetPassword />
                </ProtectedRoute>
                <ProtectedRoute path='/profile'>
                    <Profile />
                </ProtectedRoute>
                <Route path='/ingredients/:id' exact={ true }>
                    <IngredientDetails />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            { background && (
                <Route path='/ingredients/:id' exact={ true }>
                    { currentIngredient && (
                        <Modal
                            header={ '???????????? ??????????????????????' }
                            withHistoryBack
                            onClose={ () => {
                                dispatch(removeCurrentIngredient())
                                history.goBack()
                            } }
                        >
                            <IngredientDetails ingredient={ currentIngredient } />
                        </Modal>
                    ) }
                </Route>
            ) }
        </div>
    );
}

export default App;
