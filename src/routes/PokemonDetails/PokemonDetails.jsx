import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { BackButton } from "../../components/BackButton/BackButton"
import { PokemonImg } from './PokemonImg'
import { RadarComponent } from "./RadarComponent"
import { DataContainer } from "./DataContainer"
import './index.css'

import { useInView } from "react-intersection-observer"

function PokemonDetails() {
    const pokemon = useSelector(state => state.data.detailedPokemon)
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setIsActive(true)
        }, 600)
      }, [])

    const abilities = []

    
    const { ref, inView } = useInView({
        threshold: 0.1,
    })
    
    if(pokemon.abilities){
        pokemon.abilities.forEach((ability, index) => {
            abilities.push({})
            
            if(ability.effect_entries.length > 0){
                if (ability.effect_entries.find(entry => entry.language.name === 'en').effect.length > 120 && pokemon.abilities.length > 1) {
                    abilities[index].effect = ability.effect_entries.find(entry => entry.language.name === 'en').short_effect
                } else {
                    if(ability.effect_entries.find(entry => entry.language.name === 'en').effect.length > 400) {
                        abilities[index].effect = ability.effect_entries.find(entry => entry.language.name === 'en').short_effect
                    } else {
                        abilities[index].effect = ability.effect_entries.find(entry => entry.language.name === 'en').effect
                    }
                }    
            } else {
                abilities[index].effect = 'No description available for this ability'
            }

            abilities[index].name = ability.name
        })
    }

    return (
        <section className="pokemon-details-section">
            <BackButton/>
            <DataContainer pokemon={pokemon}>
                <div className={`data-header ${isActive ? 'active' : ''}`}>
                    <h1 className="pokemon-name">{pokemon.name}</h1>
                </div>
                <div className={`data-body ${isActive ? 'active' : ''}`}>
                    <div className="data">
                        <div className="text-data">
                            <div className='general-data'>
                                {pokemon.types && <h2 className="details-data">type: {pokemon.types.map(type => (<span>{type.type.name}</span>))}
                                </h2>}
                                <h2 className="details-data">base xp: <span>{pokemon.base_experience}</span></h2>
                                {(pokemon.height && pokemon.weight) && <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h2 className="details-data">height: <span>{pokemon.height}</span></h2>
                                    <h2 className="details-data">weight: <span>{pokemon.weight}</span></h2>
                                </div>}
                            </div>
                            <div className="stats" >
                                <h2 className="details-data">stats:</h2>
                                <div
                                    ref={ref}
                                    style={{opacity: inView ? 1 : 0, transition: 'opacity 2.5s ease-in-out'}}
                                >
                                    <RadarComponent stats={pokemon.stats}/>
                                </div>
                                
                            </div>
                        </div>
                        {abilities.length > 0 ? (<div className="abilities-container">
                                <h2 className="details-data">abilities:</h2>
                                <div className="abilities">
                                    {abilities.map(ability => (
                                        <div className="ability">
                                            <span>{ability.name}</span>
                                            <p>{ability.effect}</p>
                                        </div>
                                    ))}
                                </div>
                        </div>) : (<h2 className='empty-abilities'>It seems there isn't much more information about this Pokémon...</h2>)}
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