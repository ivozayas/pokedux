import { Card } from 'antd'
import { CustomCardTitle } from './CustomTitle'
import './index.css'
import Meta from 'antd/es/card/Meta'
import { StarOutlined } from '@ant-design/icons'

function PokemonCard({ name, url }){
    return (
        <Card
            className='pokemon-card'
            title={<CustomCardTitle name={name}/>}
            cover={<img src="" alt={name}/>}
            extra={<StarOutlined/>}
        >
            <Meta className='pokemon-card-description' description={"water, magic"}/>
        </Card>
    )
} 

export { PokemonCard }