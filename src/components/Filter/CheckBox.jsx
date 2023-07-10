import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setShowedPokemons } from '../../slices/DataSlice';
import { setClearFilter } from '../../slices/UISlice';
import './index.css'

function CheckBox() {
    const dispatch = useDispatch()
    // const showedPokemons = useSelector(state => state.data.showedPokemons)
    const pokemons = useSelector(state => state.data.pokemons)
    const clearFilter = useSelector(state => state.ui.clearFilter)

    function onChange(checked){
        dispatch(setClearFilter(checked))
        console.log(checked);
        if(!checked){
            dispatch(setShowedPokemons(pokemons))
        }
    }

    return (
        <Checkbox disabled={!clearFilter} checked={clearFilter} onChange={(e) => {onChange(e.target.checked)}}/>
    )
}


export { CheckBox }