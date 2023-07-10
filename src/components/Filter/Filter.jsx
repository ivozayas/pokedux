import { useSelector, useDispatch } from 'react-redux';
import { setGeneration, setShowedPokemons, getPokemonsWithDetails } from '../../slices/DataSlice';
import { setClearFilter, setSearching } from '../../slices/UISlice';

import { Menu } from 'antd'
import SubMenu from 'antd/es/menu/SubMenu';
import { FireOutlined, CalendarOutlined } from '@ant-design/icons';

import './index.css'
import { CheckBox } from './CheckBox';

function Filter() {
    const dispatch = useDispatch()
    const types = useSelector(state => state.data.types)
    const loading  = useSelector(state => state.ui.loading)
    const pokemons = useSelector(state => state.data.pokemons)
    const generation = useSelector(state => state.data.generation)
    
    function handleTypeFilter(type) {
        const pokemonsByType = pokemons.filter(pokemon =>
                pokemon.types.some(i => i.type.name === type)
            )

        dispatch(setShowedPokemons(pokemonsByType))
        dispatch(setClearFilter(true))
    }
    
    function handleGenFilter(gen) {
        dispatch(setGeneration(gen))
        dispatch(setSearching(true))
        dispatch(getPokemonsWithDetails(gen))
        dispatch(setClearFilter(false))
    }
    
    // isChecked ? color:yellow : white
    return (
        <Menu className='filter' selectedKeys={[]} mode="horizontal">
            {!loading && ( <CheckBox/> )}
            {!loading && (
                <SubMenu
                    className='type-filter'
                    key='types'
                    icon={<FireOutlined style={{fontSize: '15px', margin: '3px'}}/>}
                    title="Types"
                >
                    {types.map(type => (
                        <Menu.Item
                            style={{fontFamily: 'Visitor, sans-serif', fontSize: '16px'}}
                            key={type}
                            onClick={() => {handleTypeFilter(type)}}
                        >{type}</Menu.Item>
                    ))}
                </SubMenu>
            )}
            {!loading && (
                <SubMenu
                    key='gen'
                    icon={<CalendarOutlined style={{fontSize: '15px', margin: '3px'}}/>} 
                    title={`Generation: ${generation}`}
                > 
                    {[1,2,3,4,5,6,7,8,9].map(gen => (
                        <Menu.Item
                            style={{fontFamily: 'Visitor, sans-serif', fontSize: '16px'}}
                            key={gen}
                            onClick={() => {handleGenFilter(gen)}}
                        >{gen}</Menu.Item>
                    ))}
                </SubMenu>
            )}
        </Menu>
        )
}

export { Filter }