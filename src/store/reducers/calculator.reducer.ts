import { AnyAction } from 'redux'

interface State {
  total: number
  cached?: number
}

const initialState: State = {
  total: 0,
}

export const calculator = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case 'CALCULATOR/ADD':
      return { ...state, total: state.total + action.payload }
    case 'CALCULATOR/REMOVE':
      return { ...state, total: state.total - action.payload }
    case 'CALCULATOR/CLEAR':
      return { ...initialState }
    default:
      return state
  }
}
