import React from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk' 
import entriesReducer from '../reducers/entriesReducer'

var reducers = combineReducers({
	entriesReducer: entriesReducer
})

var store = createStore(
	reducers: reducers,
    applyMiddleware(thunk)
)

export default store
