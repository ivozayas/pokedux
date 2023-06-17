import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    music: false
}

export const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setMusic: (state, action) => {
            state.music = action.payload
        }
    }
})

export const { setLoading, setMusic } = UISlice.actions
export default UISlice.reducer