import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Loading } from '../Loading/Loading';
import { useSelector } from "react-redux";
import './index.css'

function PokemonsList({ pokemons }) {
    const loading = useSelector((state) => state.ui.loading)

    return (
        <section style={{display: "flex", justifyContent: "center"}}>
            {loading ? ( <Loading text={'loading'}/> ) : (
                    <ul className="pokemons-list">
                        {pokemons.map((pokemon, index) => (
                            <PokemonCard
                                key={index}
                                name={pokemon.name}
                                img={pokemon.sprites.front_default}
                                type={pokemon.types} 
                                id={pokemon.id}
                                isFav={pokemon.favorite}
                            ></PokemonCard>
                        ))}
                    </ul>
                )
            }
        </section>
  
    )
} 

export { PokemonsList }