import * as bookmarksAction from '../actions/bookmarks.actions'
import { ActionType, getType } from 'typesafe-actions'
import { Bookmark } from '../../models/bookmarks.models'

type BookmarksAction = ActionType<typeof bookmarksAction>

type State = Readonly<{
  items: ReadonlyArray<Bookmark>
}>

const initialState: State = {
  items: [],
}

export const bookmarks = (
  state = initialState,
  action: BookmarksAction,
): State => {
  switch (action.type) {
    case getType(bookmarksAction.bookmarksFetchFulfilled):
      return { ...state, items: action.payload }
    case getType(bookmarksAction.bookmarkAddFulfilled):
      return { ...state, items: [...state.items, action.payload] }
    case getType(bookmarksAction.bookmarkRemoveFulfilled):
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}
