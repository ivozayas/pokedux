import { combineReducers } from 'redux'
import dataReducer from '../slices/DataSlice'
import UIReducer from '../slices/UISlice'

const rootReducer = combineReducers({
    // recibe un objeto, cada propiedad de este va a ser una propiedad del estado
    data: dataReducer,
    ui: UIReducer
})

export { rootReducer }