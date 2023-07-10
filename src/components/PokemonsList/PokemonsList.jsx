import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Loading } from '../Loading/Loading';
import { useSelector } from "react-redux";
import './index.css'

function PokemonsList({ pokemons }) {
    const loading = useSelector((state) => state.ui.loading)
    const searching = useSelector((state) => state.ui.searching)

    return (
        <section style={{display: "flex", justifyContent: "center", paddingBottom: "100px"}}>
            {(loading && !searching) && ( <Loading text={'loading'}/> )}
            {(searching && !loading) && ( <Loading text={'searching'}/> )}
            {(!loading && !searching) && (
                    <ul className="pokemons-list">
                        {pokemons.map((pokemon, index) => (
                            <PokemonCard
                                key={index}
                                name={pokemon.name}
                                img={pokemon.sprites.front_default}
                                type={[...pokemon.types]} 
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