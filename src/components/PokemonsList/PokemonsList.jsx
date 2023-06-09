import { PokemonCard } from "../PokemonCard/PokemonCard";
import './index.css'

function PokemonsList({ pokemons }) {
    return (
        <ul className="pokemons-list">
            {pokemons.map((pokemon, index) => (
            <PokemonCard
                key={index}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                // url={pokemon.url} 
            ></PokemonCard>
            ))}
        </ul>
    )
} 

export { PokemonsList }