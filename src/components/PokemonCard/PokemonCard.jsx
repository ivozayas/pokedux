import { useDispatch } from 'react-redux'
import { setFavorite } from '../../actions'
import React from 'react'

import Meta from 'antd/es/card/Meta'
import { useInView } from "react-intersection-observer"
import { Card } from 'antd'
import { CustomCardTitle } from './CustomTitle'
import { PokemonDescription } from './PokemonDescription'
import { FavButton } from './FavButton'
import './index.css'

function PokemonCard({ name, img, type, id, isFav }){
    const dispatch = useDispatch()

    function typeColor(types){
        function isNormal(){
            if(types[0].type.name === 'normal' && types.length > 1){
                return 1
            } else{ 
                return 0
            }
        }

        switch(types[isNormal()].type.name) {
            case 'grass':
                return 'linear-gradient(180deg, rgba(15,120,69,1) 0%, rgba(60,222,58,1) 100%)';
            case 'fire':
                return 'linear-gradient(180deg, rgba(202,42,0,1) 0%, rgba(255,190,0,1) 100%)';
            case 'water':
                return 'linear-gradient(180deg, rgba(10,80,230,1) 0%, rgba(30,224,255,1) 100%)';
            case 'bug':
                return 'linear-gradient(180deg, rgba(125,105,45,1) 0%, rgba(141,230,112,1) 100%)'
            case 'poison':
                return 'linear-gradient(180deg, rgba(122,3,133,1) 0%, rgba(52,235,87,1) 100%)';
            case 'flying':
                return 'linear-gradient(180deg, rgba(180,138,235,1) 0%, rgba(255,245,255,1) 100%)';
            case 'electric':
                return 'linear-gradient(180deg, rgba(170,142,0,1) 0%, rgba(254,255,0,1) 100%)';
            case 'ground':
                return 'linear-gradient(180deg, rgba(110,79,25,1) 0%, rgba(245,199,72,1) 100%)';
            case 'fairy':
                return 'linear-gradient(180deg, rgba(255,124,165,1) 0%, rgba(255,239,239,1) 100%)';
            case 'normal':
                return ' linear-gradient(180deg, rgba(172,151,113,1) 0%, rgba(238,255,230,1) 100%)';
            case 'ghost':
                return 'linear-gradient(180deg, rgba(48,11,74,1) 0%, rgba(115,26,159,1) 100%)';
            case 'psychic':
                return 'linear-gradient(180deg, rgba(54,23,160,1) 0%, rgba(224,52,251,1) 100%)';
            case 'ice':
                return 'linear-gradient(180deg, rgba(27,151,221,1) 0%, rgba(212,242,245,1) 100%)';
            case 'rock':
                return 'linear-gradient(180deg, rgba(119,89,97,1) 0%, rgba(194,193,194,1) 100%)';
            case 'fighting':
                return ' linear-gradient(180deg, rgba(120,25,35,1) 0%, rgba(195,136,136,1) 100%)';
            case 'dragon':
                return ' linear-gradient(180deg, rgba(205,0,152,1) 0%, rgba(255,192,18,1) 100%)';
            case 'dark':
                return 'linear-gradient(180deg, rgba(8,0,44,1) 0%, rgba(93,84,164,1) 100%';
            case 'steel':
                return 'linear-gradient(180deg, rgba(63,74,106,1) 0%, rgba(200,217,245,1) 100%)';
            default:
                return 'white'
        }
    }

    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    function handleOnFav() {
        dispatch(setFavorite({pokemonID: id}))
    }

    return (
        <Card
            className='pokemon-card'
            title={<CustomCardTitle name={name}/>}
            cover={<img className='pokemon-img' src={img} alt={name}/>}
            extra={<FavButton isFav={isFav} onClick={handleOnFav}/>}
            style={{
                background: typeColor(type),
                opacity: inView ? 1 : 0
            }}
            ref={ref}
        >
            <Meta className='pokemon-card-description' description={<PokemonDescription types={type}/>}/>
        </Card>
    )
} 

export { PokemonCard }
// export default React.memo(PokemonCard, (prevProps, nextProps) => {
//     return prevProps.isFav === nextProps.isFav;
//   }) // usando shallowEqual no  hace falta