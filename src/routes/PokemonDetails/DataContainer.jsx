import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import './index.css'

function DataContainer({ children, pokemon }) {
    const typesColors = useSelector(state => state.ui.typesColors)
    const [isActive, setIsActive] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    let type = pokemon.types[0].type.name
    if(pokemon.types[0].type.name === 'normal' && pokemon.types.length > 1) {
        type = pokemon.types[1].type.name
    }


    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <section
            className={`data-container ${isActive ? 'active' : ''}`}
            style={{background: typesColors[type], opacity: inView ? 1 : 0}}
            ref={ref}
        >{children}
        </section> 
    )
}

export { DataContainer }