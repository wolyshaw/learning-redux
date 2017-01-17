let Two = (state = { msg: 'init', isopen: false }, action) => {
	switch(action.type){
		case 'two':
			return {
				msg: action.msg,
				isopen: !state.isopen
			}
		default :
			return state
	}
}

export default Two
