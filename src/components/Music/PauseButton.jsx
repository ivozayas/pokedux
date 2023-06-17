import React from 'react';
import { PauseOutlined, SoundOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { setMusic } from '../../slices/UISlice'
import './index.css'

function PauseButton() {
    const dispatch = useDispatch()
    const music = useSelector(state => state.ui.music)

    function handleOnMusic() {
        dispatch(setMusic(!music))
    }

    return (
        <div className="music-wrapper" onClick={handleOnMusic}>
            {music ? <PauseOutlined className='music-icon'/> : <SoundOutlined className='music-icon'/>}
        </div>
    )
}

export { PauseButton }