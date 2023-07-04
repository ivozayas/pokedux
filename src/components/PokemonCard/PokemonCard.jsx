import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useInView } from "react-intersection-observer"
import { Link } from 'react-router-dom'

import { setFavorite } from '../../slices/DataSlice'

import Meta from 'antd/es/card/Meta'
import { Card } from 'antd'
import { CustomCardTitle } from './CustomTitle'
import { PokemonDescription } from './PokemonDescription'
import { FavButton } from './FavButton'
import './index.css'

function PokemonCard({ name, img, type, id, isFav }){
    const dispatch = useDispatch()
    const typesColors = useSelector(state => state.ui.typesColors)

    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    if(type[0].type.name === 'normal' && type.length > 1) {
        type.reverse()
    }

    function handleOnFav() {
        dispatch(setFavorite({pokemonID: id}))
    }

    return (
        <Link
            to={`/pokemon-details/${id}`}
            className='link'
            style={{opacity: inView ? 1 : 0}}
            ref={ref}
        >
            <Card
                className='pokemon-card'
                title={<CustomCardTitle name={name}/>}
                cover={img ? <img className='pokemon-img' src={img} alt={name}/> : <div/>}
                extra={<FavButton isFav={isFav} onClick={handleOnFav}/>}
                style={{ // corregir color normal?...
                    background: typesColors[type[0].type.name],
                }}
            >
                <Meta className='pokemon-card-description' description={<PokemonDescription types={type}/>}/>
            </Card>
        </Link>
    )
} 

export { PokemonCard }
// export default React.memo(PokemonCard, (prevProps, nextProps) => {
//     return prevProps.isFav === nextProps.isFav;
//   }) // usando shallowEqual no  hace falta