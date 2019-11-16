import { createAction } from 'typesafe-actions'
import { Bookmark, BookmarkId } from '../../models/bookmarks.models'

export const bookmarkAdd = createAction('bookmark/ADD')<Bookmark>()
export const bookmarkRemove = createAction('bookmark/REMOVE')<BookmarkId>()
