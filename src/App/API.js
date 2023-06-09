import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonsAction } from '../actions/index.js'

function usePokemons(pokemonUrl){
    const dispatch = useDispatch();
    const reduxPokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        function getPokemonDetails(url){
            return axios.get(url)
                        .then(res => res.data)
                        .catch(err => console.log(err))
        }

        async function getPokemons(){
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            const pokemonsDetails = await Promise.all (
                data.results.map(pokemon => (getPokemonDetails(pokemon.url)))
            )

            dispatch(setPokemonsAction(pokemonsDetails))
        }

        getPokemons()
      }, [dispatch])

    //   useEffect(() => {
    //     async function getPokemon(pokemonUrl){
    //         const { data } = await axios.get(pokemonUrl)
    //         setPokemon(data.results)
    //     }

    //     getPokemon()
    //   }, [pokemonUrl])
    
    return { reduxPokemons }
}

export { usePokemons }