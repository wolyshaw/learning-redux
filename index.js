import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './src/components/root'
import Store from './src/reducers/store'
import newStore from './src/reducers'
let storeApp = createStore(newStore)
console.log(storeApp.getState())
render(
	<Provider store={ storeApp }>
		{
			<Root />
		}
	</Provider>,
	document.getElementById('root')
)
