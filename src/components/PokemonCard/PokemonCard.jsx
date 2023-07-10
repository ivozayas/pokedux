import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useInView } from "react-intersection-observer"
import { Link, useNavigate } from 'react-router-dom'

import { setFavorite, setDetailedPokemon } from '../../slices/DataSlice'
import { getPokemonDetails } from '../../App/API'

import Meta from 'antd/es/card/Meta'
import { Card } from 'antd'
import { CustomCardTitle } from './CustomTitle'
import { PokemonDescription } from './PokemonDescription'
import { FavButton } from './FavButton'
import './index.css'

function PokemonCard({ name, img, type, id }){
    const dispatch = useDispatch()
    const typesColors = useSelector(state => state.ui.typesColors)
    const navigate = useNavigate()

    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    if(type[0].type.name === 'normal' && type.length > 1) {
        type.reverse()
    }

    function handleOnFav(event) {
        event.preventDefault()
        event.stopPropagation()

        dispatch(setFavorite({pokemonID: id}))
    }

    async function handleDetailLink() {
        dispatch(setDetailedPokemon({}))
        
        const currentPokemonDetails = await getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const detailedPokemonAbilities = await Promise.all(
            currentPokemonDetails.abilities.map(ability => {
                return getPokemonDetails(ability.ability.url)
            })
        )

        currentPokemonDetails.abilities = detailedPokemonAbilities

        dispatch(setDetailedPokemon(currentPokemonDetails))
        navigate(`/pokemon-details/${id}`)
    }

    return (
        <Link
            to={"#"}
            className='link'
            style={{opacity: inView ? 1 : 0}}
            ref={ref}
            onClick={handleDetailLink}
        >
            <Card
                className='pokemon-card'
                title={<CustomCardTitle name={name}/>}
                cover={<img
                    className='pokemon-img'
                    src={img}
                    alt={name}
                />}
                extra={<FavButton
                    id={id}
                    onClick={(event) => { handleOnFav(event)}}
                />}
                style={{background: typesColors[type[0].type.name]}}
            >
                <Meta className='pokemon-card-description' description={<PokemonDescription types={type} id={id}/>}/>
            </Card>
        </Link>
    )
} 

export { PokemonCard }
// export default React.memo(PokemonCard, (prevProps, nextProps) => {
//     return prevProps.isFav === nextProps.isFav;
//   }) // usando shallowEqual no  hace falta