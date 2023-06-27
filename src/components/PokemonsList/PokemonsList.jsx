import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Loading } from '../Loading/Loading';
import { useSelector } from "react-redux";
import './index.css'

function PokemonsList() {
    const loading = useSelector((state) => state.ui.loading)
    const emptySearch = useSelector((state) => state.ui.emptySearch)
    const searching = useSelector((state) => state.ui.searching)
    
    const searchValue = useSelector((state) => state.data.searchValue)
    const pokemons = useSelector((state) => state.data.pokemons)
    const searchedPokemons = useSelector((state) => state.data.searchedPokemons)
    let showedPokemons = []

    if (searchedPokemons.length < 1) {
        showedPokemons = pokemons
    } else {
        showedPokemons = searchedPokemons
    }

    return (
        <section style={{display: "flex", justifyContent: "center"}}>
            {loading && <Loading text={'loading'}/>}
            {searching && <Loading text={'searching'}/>}
            {(!searching && !loading && emptySearch) && <h1 className="empty-search">there are no results for: <span>{searchValue}</span></h1>}
            {(!loading && !searching && !emptySearch) &&
                <ul className="pokemons-list">
                    {showedPokemons.map((pokemon, index) => (
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
            }
        </section>
  
    )
} 

export { PokemonsList }