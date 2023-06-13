import { SET_LOADING, SET_POKEMONS } from "./types"
import { getPokemonDetails } from '../App/API'

function setPokemonsAction(payload){
   return {
        type: SET_POKEMONS,
        payload
    }
}

function setLoading(payload){
    return {
        type: SET_LOADING,
        payload
    }
}


// en la estructura de redux thunk, el action creator devuelve una función que recibe un dispatch
function getPokemonsWithDetailsAction(pokemons = []){
    return (
        async (dispatch) => {
            const pokemonsDetails = await Promise.all (
                pokemons.map(pokemon => getPokemonDetails(pokemon.url))
            )

            dispatch(setPokemonsAction(pokemonsDetails))
        }
    )
}

export { setPokemonsAction, getPokemonsWithDetailsAction, setLoading }