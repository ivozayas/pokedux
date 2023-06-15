// import { combineReducers } from 'redux' // sin immutable
import { combineReducers } from 'redux-immutable' // como estamos usando immutable, debemos instalar la librería redux immutable 

import { pokemonsReducer } from './pokemons'
import { UIReducer } from './UI'

const rootReducer = combineReducers({
    // recibe un objeto, cada propiedad de este va a ser una propiedad del estado
    data: pokemonsReducer,
    UI: UIReducer,
})

export { rootReducer }