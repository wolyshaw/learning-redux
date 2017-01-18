import React, { Component } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as One from '../actions/one'

let Loding = props => {
	let { isopen, msg } = props
	return (
		<div style={{display: isopen ? 'block' : 'none'}}>Loding...</div>
	)
}

export default Loding
