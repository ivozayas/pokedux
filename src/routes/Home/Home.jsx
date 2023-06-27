import React from "react"
import { Header } from "../../components/Header/Header"
import { Filter } from "../../components/Filter/Filter"
import { PokemonsList } from "../../components/PokemonsList/PokemonsList"
import { useSelector } from "react-redux"
import  './index.css'

function Home() {
    const pokemons = useSelector(state => state.data.pokemons)
    
    return (
        <React.Fragment>
            <section className="home">
                <Header/>
                <Filter/>
                <PokemonsList pokemons={pokemons}/>
            </section>
        </React.Fragment>
    )
}

export { Home }