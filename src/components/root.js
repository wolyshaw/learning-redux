import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Loading from './loading'
import * as One from '../actions/one'

let mapStateToProps = state => ({
	text: state.One.text,
	isopen: state.One.isopen
})

let mapDispatchToProps = dispatch => ({
	onTest: text => {
		dispatch(One.addOne(text))
		dispatch(One.toggleLoding())
	}
})

let Root = props => {
	let { onTest, text, isopen } = props
	return(
		<div>
			<Loading/>
			<div onClick={() => onTest('textasfsd')}>{text}</div>
		</div>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Root)
