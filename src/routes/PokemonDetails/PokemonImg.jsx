import { useState, useEffect } from "react"
import './index.css'

function PokemonImg({ src, alt }) {
    const [ size, setSize ] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setSize((prevSize) => {return prevSize > 1 ? 1 : 1.03})
        }, 900);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <img
            className="pokemon-details-img"
            src={src}
            alt={alt}
            style={{
                transform: `scale(${size})`,
                transition: 'transform 1s ease-in-out'
            }}
        />
    )
}

export { PokemonImg }