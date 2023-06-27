import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.css'

function BackButton() {
    const navigate  = useNavigate()

    return (
        <ArrowLeftOutlined className='back-btn' onClick={() => navigate('/')}/>
    )
}

export { BackButton }