import { BookmarkId } from '../../models/bookmarks.models'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookmarkRemove } from '../../store/actions/bookmarks.actions'
import { RootState } from '../../store/reducers'

type Props = {
  id: BookmarkId
}

export const BookmarkRemove: FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.bookmarks.items)

  const remove = () => dispatch(bookmarkRemove(id))
  const isBookmarked = items.some(item => id === item.id)

  return (
    <button
      className="btn btn-danger"
      onClick={remove}
      disabled={!isBookmarked}
    >
      remove
    </button>
  )
}
