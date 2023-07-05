import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonDetails, getPokemons } from '../App/API'
import { setLoading, setMusic } from './UISlice'

// redux toolkit se encarga por sí sólo de la inmutabilidad
const initialState = {
    pokemons: [],
    showedPokemons: [],
    types: [],
    searchValue: '',
    pokemonsAbilities: [],
    searchedType: '',
    favoritePokemons: []
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
        
        const abilitiesDetails = await Promise.all (
            pokemonsDetails.map(pokemon => {
                return Promise.all(pokemon.abilities.map(ability => {
                    return getPokemonDetails(ability.ability.url)
                }))      
            })
        )

        //
        if (!localStorage.getItem('fav_pokemons')) {
            localStorage.setItem('fav_pokemons', JSON.stringify([]))
        }
            
        const favoriteList = JSON.parse(localStorage.getItem('fav_pokemons'))

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
        dispatch(setPokemonsAbilities(abilitiesDetails))
        dispatch(setShowedPokemons(pokemonsDetails))
        dispatch(setLoading(false))
        dispatch(setFavoritePokemons())
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
        setSearchedType: (state, action) => {
            state.searchedType = action.payload
        },
        setShowedPokemons: (state, action) => {
            state.showedPokemons = action.payload
        },
        setPokemonsAbilities: (state, action) => {
            state.pokemonsAbilities = action.payload
        },
        setFavoritePokemons: (state) => {
            state.favoritePokemons = JSON.parse(localStorage.getItem('fav_pokemons'))
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
    setShowedPokemons,
    setPokemonsAbilities,
    setFavoritePokemons
} = dataSlice.actions

export default dataSlice.reducer