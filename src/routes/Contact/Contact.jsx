import { useSelector } from "react-redux"
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import './index.css'

function Contact() {
    const pokemons = useSelector(state => state.data.pokemons)
    const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id === 54)
    const pokemon = pokemons[pokemonIndex]

    return (
        <section className="contact-container">            
            <img src={pokemon.sprites.front_default} alt={pokemon.id}/>
            <h1 className="name">Ivo zayas</h1>
            <h1 className="a">front end developer jr</h1>
            <div className="icon-container">
                <a
                    href="https://www.linkedin.com/in/ivo-zayas"
                    className="contact-icon" 
                    target="_blank"
                    rel="noopener noreferrer"
                ><LinkedinOutlined/></a>
                <a
                    href="https://github.com/ivozayas"
                    className="contact-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                ><GithubOutlined /></a>
            </div>
        </section>
    )
}

export { Contact }