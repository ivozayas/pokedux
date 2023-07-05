import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import './index.css'

function DataContainer({ children, pokemon }) {
    const typesColors = useSelector(state => state.ui.typesColors)

    const [ brightness, setBrightness ] = useState(100)
    
    let type = pokemon.types[0].type.name
    if(pokemon.types[0].type.name === 'normal' && pokemon.types.length > 1) {
        type = pokemon.types[1].type.name
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setBrightness((prevBrightness) => {return prevBrightness > 95 ? 95 : 105})
        }, 2000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <section className="data-container"
            style={{
                background: typesColors[type],
                filter: `brightness(${brightness}%)`,
                transition: 'filter 2s ease-in-out'
            }}
        >{children}
        </section> 
    )
}

export { DataContainer }