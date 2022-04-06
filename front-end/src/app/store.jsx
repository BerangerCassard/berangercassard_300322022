import {createStore, combineReducers, applyMiddleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {loginReducer} from "../features/login/loginSlice";

const store = configureStore({
	reducer : {
		userLogin : loginReducer
	}}

)

export default store

