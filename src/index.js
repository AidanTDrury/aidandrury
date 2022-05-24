import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Footer from './components/main/footer';

import reportWebVitals from './reportWebVitals';

import './index.css';
import theme from './lib/theme';

import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
