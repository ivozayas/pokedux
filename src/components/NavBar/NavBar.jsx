import './index.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NavBar() {
    const loading = useSelector(state => state.ui.loading)

    return (
        <div className={`nav-bar ${loading ? '' : 'nav-bar-off-loading'}`}>
            <ul style={{opacity: loading ? 0 : 1}}>
                <li className='link'><Link to='/' className='link'><p>Home</p></Link></li>
                
                <li className='link'><Link to='/favorites' className='link'><p>favorites</p></Link></li>
                
                <li className='link'><Link to='/contact' className='link'><p>contact</p></Link></li>
            </ul>
        </div>
    )
}

export { NavBar }