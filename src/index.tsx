import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { store } from "./services";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    // </React.StrictMode>
);

reportWebVitals();
