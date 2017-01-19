import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Loading from './loading'
import * as One from '../actions/one'

let mapStateToProps = state => {
	console.log(state)
	return ({
		text: state.One.text,
		isopen: state.showLoad.isopen,
		msg: state.showLoad.msg
	})
}

let mapDispatchToProps = dispatch => ({
	onTest: text => {
		dispatch(One.addOne(text))
	}
})

let Root = props => {
	let { onTest, text, isopen, msg, children } = props
	return(
		<div>
			{children}
			<Loading isopen={isopen} msg={msg}/>
		</div>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Root)
