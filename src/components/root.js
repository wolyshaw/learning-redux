import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

let mapStateToProps = state => ({
	text: state.text,
	isopen: state.isopen
})

let changeText = () => ({
		type: 'toggle click',
		text: 'changeText'
	})

let mapDispatchToProps = dispatch => ({
		actions: bindActionCreators({changeText: changeText}, dispatch)
	})

class Root extends Component {
	constructor(s) {
		super(s)
	}

	render(){
		let { actions, text, isopen } = this.props
		return(
			<div onClick={actions.changeText} style={isopen ? {color: '#fff'} : {color: '#000'}} actions={ actions }>{ text }</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Root)
