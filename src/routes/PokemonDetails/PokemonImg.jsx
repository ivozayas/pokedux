import { useState, useEffect } from "react"
import './index.css'

function PokemonImg({ src, alt }) {
    const [ size, setSize ] = useState(1)
    const [ brightness, setBrightness ] = useState(100)

    useEffect(() => {
        const interval = setInterval(() => {
            setSize((prevSize) => {return prevSize > 1 ? 1 : 1.03})
        }, 1000);

        const bInterval = setInterval(() => {
            setBrightness((prevBrightness) => {return prevBrightness > 100 ? 98 : 110})
        }, 1000);

        return () => {
            clearInterval(interval)
            clearInterval(bInterval)
        }
    }, [])

    return (
        <img
            className="pokemon-details-img"
            src={src}
            alt={alt}
            style={{
                transform: `scale(${size})`,
                transition: 'transform 1s ease-in-out, filter 1s ease-in-out',
                filter: `brightness(${brightness}%)`
            }}
        />
    )
}

export { PokemonImg }