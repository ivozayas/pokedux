import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    music: false,
    searching: false,
    emptySearch: false,
    typesColors: {
        grass: 'linear-gradient(180deg, rgba(15,125,50,1) 0%, rgba(60,222,58,1) 100%)',
        fire: 'linear-gradient(180deg, rgba(202,42,0,1) 0%, rgba(255,190,0,1) 100%)',
        water: 'linear-gradient(180deg, rgba(10,80,230,1) 0%, rgba(30,224,255,1) 100%)',
        bug: 'linear-gradient(180deg, rgba(125,105,45,1) 0%, rgba(141,230,112,1) 100%)',
        poison: 'linear-gradient(180deg, rgba(122,3,133,1) 0%, rgba(52,235,87,1) 100%)',
        flying: 'linear-gradient(180deg, rgba(180,138,235,1) 0%, rgba(255,220,255,1) 100%)',
        electric: 'linear-gradient(180deg, rgba(170,142,0,1) 0%, rgba(244,235,0,1) 100%)',
        ground: 'linear-gradient(180deg, rgba(110,79,25,1) 0%, rgba(245,199,72,1) 100%)',
        fairy: 'linear-gradient(180deg, rgba(255,124,165,1) 0%, rgba(255,219,219,1) 100%)',
        normal: ' linear-gradient(180deg, rgba(162,141,103,1) 0%, rgba(208,225,180,1) 100%)',
        ghost: 'linear-gradient(180deg, rgba(48,11,74,1) 0%, rgba(115,26,159,1) 100%)',
        psychic: 'linear-gradient(180deg, rgba(54,23,160,1) 0%, rgba(224,52,251,1) 100%)',
        ice: 'linear-gradient(180deg, rgba(27,151,221,1) 0%, rgba(202,222,245,1) 100%)',
        rock: 'linear-gradient(180deg, rgba(119,89,97,1) 0%, rgba(194,193,194,1) 100%)',
        fighting: 'linear-gradient(180deg, rgba(120,25,35,1) 0%, rgba(195,136,136,1) 100%)',
        dragon: ' linear-gradient(180deg, rgba(205,0,152,1) 0%, rgba(255,162,60,1) 100%)',
        dark: 'linear-gradient(180deg, rgba(8,0,44,1) 0%, rgba(93,84,164,1) 100%',
        steel: 'linear-gradient(180deg, rgba(63,74,106,1) 0%, rgba(200,217,245,1) 100%)'
    }
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
        },
        setEmptySearch: (state, action) => {
            state.emptySearch = action.payload
        },
        setSearching: (state, action) => {
            state.searching = action.payload
        }
    }
})

export const {
    setLoading,
    setMusic,
    setEmptySearch,
    setSearching
} = UISlice.actions
export default UISlice.reducer