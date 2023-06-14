import './index.css'
import { StarOutlined, StarFilled } from '@ant-design/icons'

function FavButton({ isFav, onClick }){
    const Icon = isFav ? StarFilled : StarOutlined
    
    return <Icon className={isFav ? 'on-fav' : 'set-fav'} onClick={onClick}/>
}

export { FavButton }