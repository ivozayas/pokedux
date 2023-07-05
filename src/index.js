import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger, localStorageMiddleware } from './middlewares';

import App from './App/App';
import { rootReducer } from './reducers/rootReducer';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // para usar devtools con redux thunk

const componseEnhancers = composeAlt(
  applyMiddleware(thunk, logger, localStorageMiddleware)
)
// const componseEnhancers = compose(
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//         applyMiddleware(thunk, logger)
//       )

const store = createStore(
        rootReducer,
        componseEnhancers
      )

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);