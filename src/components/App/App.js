import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import app from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Order from '../Order/Order';

const App = () => {
    const path = useLocation().pathname;

    return (
        <div className={app.app}>
            <Routes>
                <Route path="/" element={<AppHeader path={path} />}>
                    <Route path="/" element={<Main />}/>
                    <Route path="/order" element={<Order />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
