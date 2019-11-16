import { createAction } from 'typesafe-actions'
import { Bookmark, BookmarkId } from '../../models/bookmarks.models'
import Axios from 'axios'

export const bookmarkAdd = createAction('bookmark/ADD', (item: Bookmark) =>
  Axios.post('http://localhost:4321/bookmarks', item).then(resp => resp.data),
)()

export const bookmarkAddFulfilled = createAction('bookmark/ADD_FULFILLED')<
  Bookmark
>()

export const bookmarkRemove = createAction(
  'bookmark/REMOVE',
  (id: BookmarkId) =>
    Axios.delete(`http://localhost:4321/bookmarks/${id}`).then(() => id),
)()

export const bookmarkRemoveFulfilled = createAction(
  'bookmark/REMOVE_FULFILLED',
)<BookmarkId>()

export const bookmarksFetch = createAction('bookmark/FETCH', () =>
  Axios.get('http://localhost:4321/bookmarks').then(resp => resp.data),
)()

export const bookmarksFetchFulfilled = createAction('bookmark/FETCH_FULFILLED')<
  Bookmark[]
>()
