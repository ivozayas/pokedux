import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { BackButton } from "../../components/BackButton/BackButton"
import { PokemonImg } from './PokemonImg'
import './index.css'
import { RadarComponent } from "../../components/RadarComponent/RadarComponent"
import { DataContainer } from "./DataContainer"
// import { FavButton } from "../../components/PokemonCard/FavButton"

// quiero que aparezca en fade-in en el lado izquierdo y se despliegue desde 0 width y entonces aparezca la información en fade-in también.

function PokemonDetails() {
    const pokemons = useSelector(state => state.data.pokemons)
    const pokemonsAbilities = useSelector(state => state.data.pokemonsAbilities)

    const { id } = useParams()

    const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id.toString() === id)
    const pokemon = pokemons[pokemonIndex]
    const abilities = [] 

    pokemonsAbilities[pokemonIndex].forEach((ability, index) => {
        abilities.push({})
        if (ability.effect_entries.find(entry => entry.language.name === 'en').effect.length > 120) {
            abilities[index].effect = ability.effect_entries.find(entry => entry.language.name === 'en').short_effect
        } else {
            abilities[index].effect = ability.effect_entries.find(entry => entry.language.name === 'en').effect
        }

        abilities[index].name = ability.name
    })

    return (
        <section className="pokemon-details-section">
            <BackButton/>
            <DataContainer pokemon={pokemon}>
                <div className="data-header">
                    <h1 className="pokemon-name">{pokemon.name}</h1>
                </div>
                <div className="data-body">
                    <div className="data">
                        <div className="text-data">
                            <div>
                                <h2 className="details-data">type: {pokemon.types.map(type => (<span>{type.type.name}</span>))}
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
                        <div className="abilities-container">
                                <h2 className="details-data">abilities:</h2>
                                <div className="abilities">
                                    {abilities.map(ability => (
                                        <div className="ability">
                                            <span>{ability.name}</span>
                                            <p>{ability.effect}</p>
                                        </div>
                                    ))}
                                </div>
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