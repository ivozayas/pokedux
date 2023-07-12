import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import backgroundmusic from '../../assets/backgroundmusic.mp3'

function Audio() {
    const music = useSelector(state => state.ui.music)
    
    useEffect(() => {
        const audioElement = document.getElementById('background-music');
        
        if (audioElement) {
          audioElement.volume = 0.5
        }
    }, [])

    return music && <audio
            id='background-music'
            src={backgroundmusic}
            autoPlay
            loop
        ></audio>
}

export { Audio }