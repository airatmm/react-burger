import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import Order from '../order/order';
import { getAllIngredients } from '../../utils/api';
import { SERVER_ERROR } from "../../utils/constants";

const App = () => {
    const [ingredients, setIngredients] = useState([])
    const path = useLocation().pathname;

    const getAllIngredientsData = () => {
        getAllIngredients()
            .then((data) => {
                setIngredients(data.data)
            })
            .catch(() => {
                console.log(SERVER_ERROR)
            })
    }
    useEffect(() => {
        getAllIngredientsData();
    })

    return (
        <div className={ styles.app }>
            <Routes>
                <Route path="/" element={ <AppHeader path={ path } /> }>
                    <Route path="/" element={ <Constructor ingredients={ ingredients } /> }
                    />
                    <Route path="/order" element={ <Order /> } />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
