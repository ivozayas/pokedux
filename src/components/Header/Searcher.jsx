import { Input } from 'antd'
import { useSelector } from 'react-redux'
import './index.css'

function Searcher(){
    const loading = useSelector(state => state.getIn(['UI', 'loading']))

    return <Input.Search className="input-searcher" disabled={loading} placeholder={loading ? "" : "search a pokemon..."}/>
}

export { Searcher }