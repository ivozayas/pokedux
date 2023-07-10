import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './index.css'
import { setShowedPokemons } from '../../slices/DataSlice'
import { setClearFilter } from '../../slices/UISlice'

function BackButton() {
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.data.pokemons)

    function handleOnClick() {
        if(window.location.pathname.substring(0, 7) === '/search'){
            navigate('/')
            dispatch(setShowedPokemons(pokemons))
            dispatch(setClearFilter(false))
        } else {
            navigate(-1)
        }
    }

    return (
        <ArrowLeftOutlined className='back-btn' onClick={() => handleOnClick()}/>
    )
}

export { BackButton }