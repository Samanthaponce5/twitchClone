import {combineReducers} from 'redux'
import authReducer from './AuthReducer'
import {reducer} from 'redux-form'

export default combineReducers({
    auth:authReducer,
    form:reducer
})