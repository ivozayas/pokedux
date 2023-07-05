import { useSelector } from "react-redux"
import { PokemonsList } from "../../components/PokemonsList/PokemonsList"
import { EmptyFavorites } from "./EmptyFavorites"
import { BackButton } from "../../components/BackButton/BackButton"
import './index.css'

function Favorites() {
    const favoritePokemons = useSelector(state => state.data.favoritePokemons)
    return (
        <section className="favorites-section">
            <BackButton/>
            
            <div className="favorites-container">
                {favoritePokemons.length > 0 ? (
                    <PokemonsList pokemons={favoritePokemons}/>
                ) : (
                    <EmptyFavorites/>
                )}
            </div>

        </section>
    )
}

export { Favorites }