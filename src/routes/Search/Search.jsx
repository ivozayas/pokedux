import { useSelector } from "react-redux"
import { Header } from "../../components/Header/Header"
import { PokemonsList } from "../../components/PokemonsList/PokemonsList"
import { EmptySearch } from "./EmptySearch"
import { BackButton } from "../../components/BackButton/BackButton"
import './index.css'

function Search() {
    const showedPokemons = useSelector(state => state.data.showedPokemons)
    const emptySearch = useSelector((state) => state.ui.emptySearch)
    const searching = useSelector((state) => state.ui.searching)
    
    return (
        <section className="search-section">
            <BackButton/>
            <Header/>
            <div className="searched-container">
                {emptySearch ? ( <EmptySearch/> ) : (
                        <div className="search-section">
                            {!searching && (
                                <h1 className="result-search">
                                    results for: <span>{window.location.pathname.substring(8)}</span>
                                </h1>
                            )}
                            <PokemonsList pokemons={showedPokemons}/>   
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export { Search }