import { authReducer } from './authReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    authReducer: authReducer
})

export default reducers

