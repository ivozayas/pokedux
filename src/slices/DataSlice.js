import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonDetails, getPokemons } from '../App/API'
import { setLoading, setMusic } from './UISlice'

// redux toolkit se encarga por sí sólo de la inmutabilidad
const initialState = {
    pokemons: [],
    showedPokemons: [],
    types: [],
    searchValue: '',
    // searchedPokemons: [],
    searchedType: '',
    favorites: []
}

// thunk con redux toolkit
export const getPokemonsWithDetails = createAsyncThunk(
    'data/getPokemonsWithDetails',
    // este callback es llamado payload creator
    async (_, { dispatch }) => { 
        const pokemonResults = await getPokemons()

        const pokemonTypes = []

        const pokemonsDetails = await Promise.all (
            pokemonResults.map(pokemon => {        
                return getPokemonDetails(pokemon.url)
            })
        )

        pokemonsDetails.forEach( pokemon => {
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
        dispatch(setLoading(false))
    }
)

//
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: { // con redux toolkit prescindimos de los switch con cada caso, solamente necesito poner nombrar al reducer como el action creator
        setPokemons: (state, action) => {
            state.pokemons = action.payload
            // parece que modificamos el estado directamente, PERO NO! redux toolkit se está encargando de la inmutabilidad tras mambalinas
        },
        setFavorite: (state, action) => {
            const currentPokemonsIndex = state.pokemons.findIndex(pokemon => {
                return pokemon.id === action.payload.pokemonID
            })

            if(currentPokemonsIndex > 0){
                state.pokemons[currentPokemonsIndex].favorite = !state.pokemons[currentPokemonsIndex].favorite
            }
        },
        setTypes: (state, action) => {
            state.types = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setSearchedType: (state, action) => {
            state.searchedType = action.payload
        },
        setShowedPokemons: (state, action) => {
                state.showedPokemons = action.payload;
        }
    }
})

export const {
    setPokemons,
    setFavorite,
    setTypes,
    setSearchValue,
    setSearchedPokemons,
    setSearchedType,
    setShowedPokemons
} = dataSlice.actions

export default dataSlice.reducer