import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as One from '../actions/one'

let mapStateToProps = state => ({
		text: state.One.text,
		isopen: state.One.isopen
	})

let mapDispatchToProps = dispatch => ({
		onTest: text => {
			dispatch(One.addOne(text))
		}
	})

class Root extends Component {
	constructor(s) {
		super(s)
	}

	render(){
		let { onTest, text, isopen } = this.props
		console.log(onTest)
		return(
			<div onClick={() => onTest('textasfsd')}>{text}</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Root)
