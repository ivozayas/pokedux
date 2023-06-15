import { SET_LOADING } from "../actions/types"
import { fromJS } from 'immutable'

const initialState = fromJS({ // esto no va a ser un objeto si no una de las estructuras de datos con las que trabaja immutable 
    loading: true
}) // al no ser un objeto, sino otra estructura, se debe acceder de manera diferente

function UIReducer(state = initialState, action){
    switch(action.type) {
        case SET_LOADING:
            // return {
            //     ...state,
            //     loading: action.payload
            // }

            // con immutable:
            return state.setIn(['loading'], action.payload)
        default:
            return state
    }
}

export { UIReducer }