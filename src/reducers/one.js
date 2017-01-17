let One = (state = { text: 'init', isopen: false }, action) => {
	switch(action.type){
		case 'one':
			return {
				text: action.text
			}
		default :
			return state
	}
}

export default One
