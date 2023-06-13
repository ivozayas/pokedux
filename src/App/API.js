import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetailsAction, setLoading } from '../actions/index.js'

//
export function getPokemonDetails(url){
    return axios.get(url)
                .then(res => res.data)
                .catch(err => console.log(err))
}

//
function usePokemons(){
    const dispatch = useDispatch()
    const reduxPokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        async function getPokemons(){
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=350')
            
            dispatch(setLoading(true))
            dispatch(getPokemonsWithDetailsAction(data.results))
            setTimeout(() => {dispatch(setLoading(false))}, 2000)
        }

        getPokemons()
      }, [dispatch])
    
    return { reduxPokemons }
}

export { usePokemons }