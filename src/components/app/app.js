import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Constructor from '../constructor/constructor';

const App = () => {
    const path = useLocation().pathname;

    return (
        <div className={ styles.app }>
            <Routes>
                <Route path="/" element={ <AppHeader path={ path } /> }>
                    <Route path="/" element={ <Constructor /> } />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
