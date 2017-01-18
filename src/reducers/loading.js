let showLoad = (state = { msg: '', isopen: false }, action) => {
	switch(action.type){
		case 'open_load':
			return {
				msg: action.msg,
				isopen: true
			}
		case 'close_load':
			return {
				msg: '',
				isopen: false
			}
		default :
			return state
	}
}

export default showLoad
