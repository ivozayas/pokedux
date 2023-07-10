import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonDetails, getPokemons } from '../App/API'
import { setLoading, setMusic, setSearching } from './UISlice'

// redux toolkit se encarga por sí sólo de la inmutabilidad
const initialState = {
    pokemons: [],
    showedPokemons: [],
    types: [],
    searchValue: '',
    favoritePokemons: [],
    generation: 1,
    detailedPokemon: {}
}

// thunk con redux toolkit
export const getPokemonsWithDetails = createAsyncThunk(
    'data/getPokemonsWithDetails',
    // este callback es llamado payload creator
    async (gen, { dispatch }) => { 
        const pokemonsResults = await getPokemons(gen)

        const pokemonsDetails = await Promise.all (
            pokemonsResults.map(pokemon => {        
                return getPokemonDetails(pokemon.url)
            })
        )

        //
        if (!localStorage.getItem('fav_pokemons')) {
            localStorage.setItem('fav_pokemons', JSON.stringify([]))
        }
            
        const favoriteList = JSON.parse(localStorage.getItem('fav_pokemons'))

        //
        const pokemonTypes = []

        pokemonsDetails.forEach( pokemon => {
                const foundPokemon = favoriteList.find(LSpokemon => LSpokemon.id === pokemon.id)

                if(foundPokemon){
                    pokemon.favorite = true
                } else {
                    pokemon.favorite = false
                }

                pokemon.types.forEach(type => {
                    if(!pokemonTypes.includes(type.type.name)){
                        pokemonTypes.push(type.type.name)
                    }
                }) 
            }
        )

        
        dispatch(setMusic(true))
        dispatch(setTypes(pokemonTypes))
        dispatch(setPokemons(pokemonsDetails))
        dispatch(setShowedPokemons(pokemonsDetails))
        dispatch(setFavoritePokemons())
        dispatch(setLoading(false))
        dispatch(setSearching(false))
    }
)

//
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: { // con redux toolkit prescindimos de los switch con cada caso, solamente necesito nombrar al reducer como el action creator
        setPokemons: (state, action) => {
            state.pokemons = action.payload
            // parece que modificamos el estado directamente, PERO NO! redux toolkit se está encargando de la inmutabilidad tras mambalinas
        },
        setFavorite: (state, action) => {
            const currentPokemonsIndex = state.pokemons.findIndex(pokemon => {
                return pokemon.id === action.payload.pokemonID
            })

            if(currentPokemonsIndex > -1){
                state.pokemons[currentPokemonsIndex].favorite = !state.pokemons[currentPokemonsIndex].favorite
            }
        },
        setTypes: (state, action) => {
            state.types = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setShowedPokemons: (state, action) => {
            state.showedPokemons = action.payload
        },
        setFavoritePokemons: (state) => {
            state.favoritePokemons = JSON.parse(localStorage.getItem('fav_pokemons'))
        },
        setGeneration: (state, action) => {
            state.generation = action.payload
        },
        setDetailedPokemon: (state, action) => {
            state.detailedPokemon = action.payload
        }
    }
})

export const {
    setPokemons,
    setFavorite,
    setTypes,
    setSearchValue,
    setSearchedPokemons,
    setShowedPokemons,
    setFavoritePokemons,
    setGeneration,
    setDetailedPokemon
} = dataSlice.actions

export default dataSlice.reducer