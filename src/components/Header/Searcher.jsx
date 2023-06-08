import { Input } from 'antd'
import './index.css'

function Searcher(){
    return <Input.Search className="input-searcher" placeholder="search a pokemon..."/>
}

export { Searcher }