import React from "react"
import { Header } from "../../components/Header/Header"
import { Filter } from "../../components/Filter/Filter"
import { PokemonsList } from "../../components/PokemonsList/PokemonsList"

function Home() {
    return (
        <React.Fragment>
            <section className="home">
                <Header/>
                <Filter/>
                <PokemonsList/>
            </section>
        </React.Fragment>
    )
}

export { Home }