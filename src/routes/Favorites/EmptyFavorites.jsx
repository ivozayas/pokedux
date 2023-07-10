import { useState, useEffect } from 'react';
import './index.css'

function EmptyFavorites(){
    const [phrase, setPhrase] = useState('')

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 4) + 1

        switch(randomNumber) {
            case 1:
                setPhrase("Come on, there must be some Pokémon that you like.")
                break;
            case 2:
                setPhrase("Let's go find some Pokémon!")
                break;
            case 3:
                setPhrase("The Pokémon world awaits! Let's start exploring!")
                break;
            case 4:
                setPhrase("Let's explore the Pokémon world!")
                break;
            default:
                return
        }
    }, [])


    return (
        <div className='empty-favorites'>
            <p style={{ color: 'yellow' }}>There are no favorite Pokémons...</p>
            <p>{phrase}</p>
        </div>
    )
}

export { EmptyFavorites }