import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
let Store = (state = { text: 'init', isopen: false }, action) => {
	switch(action.type){
		case 'click':
			return {
				text: 'click',
				isopen: !state.isopen
			}
		case 'toggle click':
			return {
				text: action.text,
				isopen: !state.isopen
			}
		default :
			return state
	}
}

export default Store
