import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from "../reducers/index";

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeWithDevTools --> libreria que evita que escribamos el choclo gigante

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// import { applyMiddleware, compose } from 'redux';
// import { legacy_createStore as createStore} from 'redux'
// import rootReducer from "../reducer";
// import thunk from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export default store;