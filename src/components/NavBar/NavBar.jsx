import './index.css'
import { useSelector } from 'react-redux'

function NavBar() {
    const loading = useSelector(state => state.ui.loading)

    return (<div className='nav-bar'>
        <ul style={{opacity: loading ? 0 : 1}}>
            <li>Home</li>
            <li>Favorites</li>
            <li>Contact</li>
        </ul>
    </div>)
}

export { NavBar }