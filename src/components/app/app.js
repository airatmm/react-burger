import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';
import Order from '../Order/Order';

const App = () => {
    const path = useLocation().pathname;

    return (
        <div className={style.app}>
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
