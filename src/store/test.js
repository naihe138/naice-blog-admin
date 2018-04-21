import { createReducer } from '../utils'

// state
const initialState = {
  count: 0
}

export const ADD = 'ADD'

// action
export const addCount = () => dispatch => dispatch({ type: ADD, count: 1 })

export const addCount2 = () => dispatch => {
	console.log(123)
  	return fetch('https://api.github.com/repos/zeit/next.js')
}

// reducer
export default createReducer(initialState, {
	[ADD]: (state, {count}) => {
		let v = state.count + count
		return { ...state, count: v }
	}
})
