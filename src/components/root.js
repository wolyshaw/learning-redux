import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

let mapStateToProps = state => ({
	text: state.text
})

let changeText = () => ({
	type: 'toggle click',
	status: 'open'
})

let mapDispatchToProps = dispatch => ({
		actions: bindActionCreators({changeText: changeText}, dispatch)
	})

class Root extends Component {
	constructor(s) {
		super(s)
	}

	render(){
		let { actions, text } = this.props
		return(
			<div onClick={actions.changeText} actions={ actions }>{ text }</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Root)
