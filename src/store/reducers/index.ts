import { combineReducers } from 'redux'
import { calculator } from './calculator.reducer'

export const rootReducer = combineReducers({
  calculator,
})
