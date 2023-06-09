import { SET_POKEMONS } from "./types"

function setPokemonsAction(payload){
   return {
        type: SET_POKEMONS,
        payload
    }
}

export { setPokemonsAction }