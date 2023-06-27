import { useSelector } from "react-redux"
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import { useInView } from "react-intersection-observer"
import './index.css'

function Contact() {
    const { ref, inView } = useInView()

    const pokemons = useSelector(state => state.data.pokemons)
    const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id === 54)
    const pokemon = pokemons[pokemonIndex]

    return (
        <section
            className="contact-container"
            ref={ref}
            style={{opacity: inView ? 1 : 0}}
        >
            <img src={pokemon.sprites.front_default} alt={pokemon.id}/>
            <h1 className="name">Ivo zayas</h1>
            <h1 className="a">front end developer jr</h1>
            <div className="icon-container">
                <LinkedinOutlined className="contact-icon"/>
                <GithubOutlined className="contact-icon"/>
            </div>
        </section>
    )
}

export { Contact }