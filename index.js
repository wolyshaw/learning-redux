import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './src/components/root'
import Store from './src/reducers/store'
let storeApp = createStore(Store)
render(
	<Provider store={ storeApp }>
		<Root />
	</Provider>,
	document.getElementById('root')
)
