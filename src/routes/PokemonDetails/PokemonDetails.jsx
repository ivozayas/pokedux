import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { BackButton } from "../../components/BackButton/BackButton"
import { PokemonImg } from './PokemonImg'
import './index.css'
import { RadarComponent } from "../../components/RadarComponent/RadarComponent"
import { DataContainer } from "./DataContainer"

// quiero que aparezca en fade-in en el lado izquierdo y se despliegue desde 0 width y entonces aparezca la información en fade-in también.

function PokemonDetails() {
    const pokemons = useSelector(state => state.data.pokemons)
    const { id } = useParams()

    const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id.toString() === id)
    const pokemon = pokemons[pokemonIndex]

    return (
        <section>
            <BackButton/>
            <DataContainer pokemon={pokemon}>
                <div className="data-header">
                    <h1 className="pokemon-name">{pokemon.name}</h1>
                </div>
                <div className="data-body">
                    <div className="data">
                        <div className="text-data">
                            <div>
                                <h2 className="details-data">types: {pokemon.types.map(type => (<span>{type.type.name}</span>))}
                                </h2>
                                <h2 className="details-data">base xp: <span>{pokemon.base_experience}</span></h2>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h2 className="details-data">height: <span>{pokemon.height}</span></h2>
                                    <h2 className="details-data">weight: <span>{pokemon.weight}</span></h2>
                                </div>
                            </div>
                            <div className="stats">
                                <h2 className="details-data">stats:</h2>
                                <RadarComponent
                                    stats={pokemon.stats}
                                />
                            </div>
                        </div>
                        <div className="abilities">
                                <h2 className="details-data">abilities:</h2>
                                {pokemon.abilities.map(ability => (
                                    <div className="ability">
                                        <span>{ability.ability.name}</span>
                                        <p>oeirjoiejrogjif</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <PokemonImg 
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />  
                    </div>
                </div>
            </DataContainer>
            </section>
    )
}

export { PokemonDetails }