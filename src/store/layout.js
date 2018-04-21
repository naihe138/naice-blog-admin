import { createReducer } from '../utils'

// state
const initialState = {
  path: '/'
}

export const CHANGEPATH = 'CHANGEPATH'

// action
export const changePath = (path) => dispatch => dispatch({ type: CHANGEPATH, path })


// reducer
export default createReducer(initialState, {
	[CHANGEPATH]: (state, {path}) => {
		return { ...state, path}
	}
})
