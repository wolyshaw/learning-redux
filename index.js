import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Root from './src/components/root'
import Topics from './src/components/topics'
import Store from './src/reducers/store'
import newStore from './src/reducers'
import * as One from './src/actions/one'
let storeApp = createStore(
	newStore,
	applyMiddleware(thunk)
)
render(
	<Provider store={ storeApp }>
		<Router history={browserHistory}>
			<Route path="/" component={Root}>
				<IndexRoute component={Topics} onEnter={() => storeApp.dispatch(One.getTopics({}))}/>
				<Route path="/test" component={Root} onEnter={() => console.log('/test')} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
