import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as One from '../actions/one'

let Topic = props => {
	let {topic} = props
	return (
		<div>
			<h3>{topic.title}</h3>
		</div>
	)
}

let mapStateToProps = state => ({
	topics: state.topics.data,
	status: state.topics.success
})

class Topics extends Component{
	constructor(s) {
		super(s)
	}

	componentWillMount(){
		this.props.dispatch(One.getTopics({}))
	}

	render(){
		let {topics, status} = this.props
		return(
			<div>
				{
					topics.map(topic => <Topic key={topic.id} topic={topic}/>)
				}
			</div>
		)
	}
}

export default connect(
	mapStateToProps
)(Topics)
