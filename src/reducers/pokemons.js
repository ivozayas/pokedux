import { SET_POKEMONS, SET_LOADING } from "../actions/types"

const initialState = {
    pokemons: [],
    loading: true
}

function pokemonsReducer(state = initialState, action){
    switch(action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export { pokemonsReducer }