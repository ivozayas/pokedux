import { StarOutlined, StarFilled } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import './index.css'

function FavButton({ onClick, id }){
    const favoritePokemons = useSelector(state => state.data.favoritePokemons)

    const currentPokemon = favoritePokemons.findIndex(pokemon => pokemon.id === id)

    const isFav = favoritePokemons[currentPokemon]?.favorite ? true : false
    
    const Icon = isFav ? StarFilled : StarOutlined

    return <Icon className={isFav ? 'on-fav' : 'set-fav'} onClick={onClick}/>
}

export { FavButton }