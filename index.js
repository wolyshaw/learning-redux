import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import Root from './src/components/root'
import Store from './src/reducers/store'
let storeApp = createStore(Store)
console.log('storeApp', storeApp)
render(
	<Provider store={ storeApp }>
		<Root />
	</Provider>,
	document.getElementById('root')
)
