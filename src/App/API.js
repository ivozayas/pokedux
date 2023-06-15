import axios from 'axios'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
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
    const reduxPokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual())).toJS()
    // shallowEqual comprueba si los cambios en el estado son irrelevantes para un componente y en ese caso evita su re-renderización

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