import { Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue, setSearchedPokemons } from '../../slices/DataSlice'
import { setEmptySearch, setSearching} from '../../slices/UISlice'
import './index.css'

function Searcher(){
    const dispatch = useDispatch()
    const loading = useSelector(state => state.ui.loading)
    const searchValue = useSelector(state => state.data.searchValue)
    const pokemons = useSelector(state => state.data.pokemons)

    function handleChange(event) {
        dispatch(setSearchValue(event.target.value))
    }

    function handleSearch() {
        dispatch(setEmptySearch(false))

        let searchedPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()))

        dispatch(setSearching(true))

        setTimeout(() => {
            if(searchedPokemons.length < 1){
                dispatch(setEmptySearch(true))
            } else {
                dispatch(setSearchedPokemons(searchedPokemons))
            }
            dispatch(setSearching(false))
        }, 1000)
    }

    return ( 
        <Input.Search
            className={loading ? "input-searcher-loading" : "input-searcher"}
            placeholder={loading ? "" : "search a pokemon..."}
            value={searchValue}
            onChange={event => handleChange(event)}
            onSearch={handleSearch}
        />
    )
}

export { Searcher }