import { SET_POKEMONS, SET_FAVORITE } from "../actions/types"
import { fromJS } from 'immutable'

const initialState = fromJS({ // esto no va a ser un objeto si no una de las estructuras de datos con las que trabaja immutable 
    pokemons: [],
}) // al no ser un objeto, sino otra estructura, se debe acceder de manera diferente

function pokemonsReducer(state = initialState, action){
    switch(action.type) {
        case SET_POKEMONS:
            // return { // con spread operator
            //     ...state,
            //     pokemons: action.payload
            // }
            // con immutable:
            return state.setIn(['pokemons'], fromJS(action.payload)) // parámetros: 1) arreglo con los niveles a los quiera acceder (si el estado tuviera una propiedad a:{b:{c:['d']}}, para acceder a 'd' debería pasarle a setIn ['a', 'b', 'c']). 2) lo que voy a meter en el estado (debo pasarlo por fromJS porque también se trata de un objeto y debe ser convertido a las estructuras de Immutable)
        case SET_FAVORITE:
            // const newPokemonList = [...state.pokemons]
            // const currentPokemonsIndex = newPokemonList.findIndex(pokemon => {return pokemon.id === action.payload.pokemonID})
            // if (currentPokemonsIndex < 0) {
            //     return state
            // } else {
            //     newPokemonList[currentPokemonsIndex].favorite = !newPokemonList[currentPokemonsIndex].favorite
            //     return {...state, pokemons: newPokemonList}
            // }

            // con immutable:
            const currentPokemonsIndex = state.get('pokemons').findIndex(pokemon => {
                return pokemon.get('id') === action.payload.pokemonID
                // nuevamente, debo usar el método get para acceder a las propiedades de pokemon
            })

            if(currentPokemonsIndex < 0){
                return state
            } else {
                const isFav = state.get('pokemons').get(currentPokemonsIndex).get('favorite')

                return state.setIn(['pokemons', currentPokemonsIndex, 'favorite'], !isFav)
            }
        default:
            return state
    }
}

export { pokemonsReducer }