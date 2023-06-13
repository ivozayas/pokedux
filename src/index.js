import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'; 
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';

import App from './App/App';
import { pokemonsReducer } from './reducers/pokemons';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // para usar devtools con redux thunk

const componseEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
)
// const componseEnhancers = compose(
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//         applyMiddleware(thunk, logger)
//       )


const store = createStore(
        pokemonsReducer,
        componseEnhancers
      )

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);