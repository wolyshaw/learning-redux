let Two = (state = { text: 'init', isopen: false }, action) => {
	switch(action.type){
		case 'two':
			return {
				text: 'click',
				isopen: !state.isopen
			}
		default :
			return state
	}
}

export default Two
