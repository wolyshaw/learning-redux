import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as One from '../actions/one'

let mapStateToProps = state => {
	return ({
		msg: state.Two.msg,
		isopen: state.Two.isopen
	})
}

let mapDispatchToProps = dispatch => ({
	onTest: text => {
		dispatch(One.toggleLoding(text))
	}
})

let Loding = props => {
	let { isopen } = props
	return (
		<div style={{display: isopen ? 'block' : 'none'}}>Loding...</div>
	)
}

export default connect(
	mapStateToProps
)(Loding)
