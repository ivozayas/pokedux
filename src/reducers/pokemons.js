import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types"

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
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons]
            const currentPokemonsIndex = newPokemonList.findIndex(pokemon => {return pokemon.id === action.payload.pokemonID})

            if (currentPokemonsIndex < 0) {
                return state
            } else {
                newPokemonList[currentPokemonsIndex].favorite = !newPokemonList[currentPokemonsIndex].favorite
                return {...state, pokemons: newPokemonList}
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