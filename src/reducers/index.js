import { combineReducers } from 'redux'
import One from './one'
import Two from './tow'
import showLoad from './loading'
import topics from './topics'

export default combineReducers({
	One,
	Two,
	showLoad,
	topics
})
