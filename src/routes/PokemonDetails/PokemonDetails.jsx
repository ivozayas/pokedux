import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { BackButton } from "../../components/BackButton/BackButton"
import { PokemonImg } from './PokemonImg'
import './index.css'

// quiero que aparezca en fade-in en el lado izquierdo y se despliegue desde 0 width y entonces aparezca la información en fade-in también.

function PokemonDetails() {
    const pokemons = useSelector(state => state.data.pokemons)
    const typesColors = useSelector(state => state.ui.typesColors)
    const { id } = useParams()

    const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id.toString() === id)
    const pokemon = pokemons[pokemonIndex]

    return (
        <section>
            <BackButton/>
            <div className="data-container"
                style={{background: typesColors[pokemon.types[0].type.name]}}
            >
                <div className="data-header">
                    <h1 className="pokemon-name">{pokemon.name}</h1>
                </div>
                <PokemonImg 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </div>
            </section>
    )
}

export { PokemonDetails }