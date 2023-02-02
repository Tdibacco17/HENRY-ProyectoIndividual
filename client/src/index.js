import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3000";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
