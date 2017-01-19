import fetch from 'isomorphic-fetch'

export const addOne = text => ({
	type: 'one',
	text
})

export const setTopics = topics => ({
	type: 'set_topics',
	topics
})

export const openLoad = msg => ({
	type: 'open_load',
	msg
})

export const closeLoad = () => ({
	type: 'close_load'
})


export const toggleLoding = load => {
	let timer
	return dispatch => {
		dispatch(openLoad(load.text))
		clearTimeout(timer)
		timer = setTimeout(() => dispatch(closeLoad()), load.delay || 3000)
	}
}

export const getTopics = putData => {
	return dispatch => {
		dispatch(openLoad('getTopics'))
		fetch('https://cnodejs.org/api/v1/topics')
			.then(res => res.json())
			.then(r => {
				dispatch(setTopics(r))
				dispatch(closeLoad())
			})
	}
}
