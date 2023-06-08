import { Searcher } from "./Searcher";
import './index.css'

function Header(params) {
    return (
        <section className="searcher-container"> 
            <h1>POKEDUX</h1>
            <Searcher></Searcher>
        </section>
    )
}

export { Header } 