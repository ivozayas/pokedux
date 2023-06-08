import { PokemonCard } from "../PokemonCard/PokemonCard";
import './index.css'

function PokemonsList() {
    let pokemons = [{name: "Ditto", type: 'water, magic'}, {name: "Pikachu", type: 'water, magic'}, {name: "Charmander", type: 'water, magic'}, {name: "Squirtle", type: 'water, magic'}, {name: "Bulbasaur", type: 'water, magic'},{name: "Ditto", type: 'water, magic'}, {name: "Pikachu", type: 'water, magic'}, {name: "Charmander", type: 'water, magic'}, {name: "Squirtle", type: 'water, magic'}, {name: "Bulbasaur", type: 'water, magic'}]

    return (
        <ul className="pokemons-list">
            {pokemons.map((pokemon, index) => (
            <PokemonCard
                key={index}
                name={pokemon.name}
                type={pokemon.type}
            ></PokemonCard>
            ))}
        </ul>
    )
} 

export { PokemonsList }