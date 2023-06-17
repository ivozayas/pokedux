import { Input } from 'antd'
import { useSelector } from 'react-redux'
import './index.css'

function Searcher(){
    const loading = useSelector(state => state.ui.loading)

    return <Input.Search style={{boxShadow: loading ? 'none' : '2px 2px 20px #20003454'}} className="input-searcher" disabled={loading} placeholder={loading ? "" : "search a pokemon..."}/>
}

export { Searcher }