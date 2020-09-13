import {combineReducers} from 'redux'
import authReducer from './AuthReducer'
import {reducer} from 'redux-form'
import streamReducer from './streamReducer'

export default combineReducers({
    auth:authReducer,
    form:reducer,
    streams:streamReducer
})