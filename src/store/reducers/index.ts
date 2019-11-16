import { combineReducers } from 'redux'
import { calculator } from './calculator.reducer'
import { bookmarks } from './bookmarks.reducer'

export const rootReducer = combineReducers({
  calculator,
  bookmarks,
})

export interface RootState {
  calculator: ReturnType<typeof calculator>
  bookmarks: ReturnType<typeof bookmarks>
}
