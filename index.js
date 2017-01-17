import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Root from './src/components/root'
import Store from './src/reducers/store'
import newStore from './src/reducers'
let storeApp = createStore(
	newStore,
	applyMiddleware(thunk)
)
render(
	<Provider store={ storeApp }>
		{
			<Root />
		}
	</Provider>,
	document.getElementById('root')
)
