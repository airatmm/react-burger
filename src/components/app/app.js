import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import Order from '../order/order';

const App = () => {
    const path = useLocation().pathname;

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<AppHeader path={path} />}>
                    <Route path="/" element={<Constructor />}/>
                    <Route path="/order" element={<Order />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;