import { Card } from 'antd'
import { CustomCardTitle } from './CustomTitle'
import './index.css'
import Meta from 'antd/es/card/Meta'

function PokemonCard({ name, type }){
    return <Card
            className='pokemon-card'
            title={<CustomCardTitle name={name}/>}
            cover={<img src="" alt={name}/>}
        >
            <Meta className='pokemon-card-description' description={type}/>
        </Card>
} 

export { PokemonCard }