import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';
import { Provider } from "react-redux";
import generateStore from "./Redux/store";
const store = generateStore();

ReactDOM.render(
  <CookiesProvider>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);


