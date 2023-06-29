import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import './index.css'

function DataContainer({ children, pokemon }) {
    const [ brightness, setBrightness ] = useState(100)
    const typesColors = useSelector(state => state.ui.typesColors)

    useEffect(() => {
        const interval = setInterval(() => {
            setBrightness((prevBrightness) => {return prevBrightness > 100 ? 100 : 120})
        }, 2500);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <section className="data-container"
            style={{
                background: typesColors[pokemon.types[0].type.name],
                filter: `brightness(${brightness}%)`,
                transition: 'filter 2.5s ease-in-out'
            }}
        >{children}
        </section> 
    )
}

export { DataContainer }