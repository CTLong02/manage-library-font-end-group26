import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/font_awesome_6_pro/css/all.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>,
);
reportWebVitals();
