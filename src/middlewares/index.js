import { setFavorite, setFavoritePokemons } from "../slices/DataSlice"

const logger = (store) => (next) => (action) => {
    // logger recibe el store
    // next es la funcion que llamaremos cuando el middleware termine su trabajo, esta función manda el action al reducer
    console.log(action)
    next(action)
}

const localStorageMiddleware = (store) => (next) => (action) => {
    if(action.type === setFavorite.type) {
        //
        const currentState = store.getState()
        const pokemons = currentState.data.pokemons

        const currentPokemon = {...pokemons.find((pokemon) => pokemon.id === action.payload.pokemonID)}
        currentPokemon.favorite = !currentPokemon.favorite
        
        //
        const favoriteList = JSON.parse(localStorage.getItem('fav_pokemons'))

        let updatedFavoriteList = []
        
        const foundPokemon = favoriteList.find(pokemon => pokemon.id === currentPokemon.id)

        if(foundPokemon){
            updatedFavoriteList = favoriteList.filter(pokemon => pokemon.id !== currentPokemon.id)
        } else {
            updatedFavoriteList = [...favoriteList, currentPokemon]
        }

        localStorage.setItem('fav_pokemons', JSON.stringify(updatedFavoriteList))

        //
        store.dispatch(setFavoritePokemons())
    }

    return next(action)
}

export {
    logger,
    localStorageMiddleware
}