import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
let Store = (state = { text: 'init' }, action) => {
	switch(action.type){
		case 'click':
			return {
				text: 'click'
			}
		case 'toggle click':
			return {
				text: state.text === 'click' ? 'toggle' : 'click'
			}
		default :
			return {
				text: 'default'
			}
	}
}

export default Store
