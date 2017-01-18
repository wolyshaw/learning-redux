let topics = (state = { data: [], success: true }, action) => {
	switch(action.type){
		case 'set_topics':
			return {
				data: state.data.concat(action.topics.data),
				success: action.topics.success
			}
		default :
			return state
	}
}

export default topics
