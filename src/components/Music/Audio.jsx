import React from "react"
import { useSelector } from "react-redux"
import backgroundmusic from '../../assets/backgroundmusic.mp3'

function Audio() {
    const music = useSelector(state => state.ui.music)

    return <audio id='background-music' src={music ? backgroundmusic : ''} autoPlay loop></audio>
}

export { Audio }