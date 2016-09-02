"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// import React from 'react'
var _redux = require("redux");

var applyMiddleware = _redux.applyMiddleware;
var createStore = _redux.createStore;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var entriesReducer = _interopRequire(require("../reducers/entriesReducer"));

var reducers = combineReducers({
	entriesReducer: entriesReducer
});

var store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;