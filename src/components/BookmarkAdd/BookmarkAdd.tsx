import { Bookmark } from '../../models/bookmarks.models'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookmarkAdd } from '../../store/actions/bookmarks.actions'
import { RootState } from '../../store/reducers'

type Props = {
  item: Bookmark
}

export const BookmarkAdd: FC<Props> = ({ item }) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.bookmarks.items)

  const save = () => dispatch(bookmarkAdd(item))
  const isBookmarked = items.some(({ id }) => id === item.id)

  return (
    <button className="btn btn-primary" onClick={save} disabled={isBookmarked}>
      add
    </button>
  )
}
