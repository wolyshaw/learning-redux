import React from 'react'
import { connect } from 'react-redux'

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

let Topics = props => {
	let {topics, status} = props
	return(
		<div>
			{
				topics.map(topic => <Topic key={topic.id} topic={topic}/>)
			}
		</div>
	)
}

export default connect(
	mapStateToProps
)(Topics)
