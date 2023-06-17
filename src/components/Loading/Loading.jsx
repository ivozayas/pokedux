import { useState, useEffect } from 'react';
import './index.css'

function Loading() {
    const [ dots, setDots ] = useState(0)
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots + 1) % 4);
        }, 300)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return(
        <h2 className='loading-text'>loading{'.'.repeat(dots)}</h2>
    )
}

export { Loading }