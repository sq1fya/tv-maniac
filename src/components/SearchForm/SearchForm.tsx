import React, { FC, MouseEvent, useState } from 'react'
import styles from './SearchForm.module.scss'

type Props = {
  initialQuery?: string
  onSubmit: (query: string) => void
}

export const SearchForm: FC<Props> = ({ onSubmit, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery)

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    onSubmit(query)
  }

  return (
    <form className={`input-group mb-3 ${styles.search}`}>
      <input
        type="search"
        value={query}
        className="form-control"
        onChange={event => setQuery(event.target.value)}
      />
      <div className="input-group-append">
        <button onClick={handleClick} className="btn btn-primary">
          search
        </button>
      </div>
    </form>
  )
}
