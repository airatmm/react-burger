import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllIngredientsData } from "../../services/slices/ingredients-slice";
import Loader from "../loader/loader";

const App = () => {
    const isIngredients = useSelector(state => state.ingredients.itemsSuccess)
    const path = useLocation().pathname;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllIngredientsData())
    }, [dispatch]);

    return (
        <div className={ styles.app }>
            <Routes>
                <Route path="/" element={ <AppHeader path={ path } /> }>
                    <Route path="/" element={ !isIngredients ? <Loader/>  : <Constructor />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
