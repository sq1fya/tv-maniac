import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Show, ShowResponse } from '../../models/tv.models'
import { Poster } from '../../components/Poster/Poster'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Badge } from '../../components/Badge/Badge'
import { PreferencesContext } from '../../context/PreferencesContext'

export const SearchPage = () => {
  const [shows, setShows] = useState<Show[]>([])

  const { initialQuery } = useContext(PreferencesContext)

  useEffect(() => {
    const daj = setInterval(() => console.log('daj'), 1000)
    return () => {
      clearInterval(daj)
    }
  })

  useEffect(() => {
    search(initialQuery)
    return () => {
      console.log('destroy!')
    }
  }, [initialQuery])

  const search = (query: string) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    axios
      .get<ShowResponse[]>(url)
      .then(({ data }) => setShows(data.map(({ show }) => show)))
  }

  return (
    <div className="row">
      <section className="col col-3">
        <h2 className="h3">Bookmarks</h2>
      </section>

      <section className="col">
        <h1 className="h3 d-flex">
          Search <Badge value={shows.length} />
        </h1>

        <SearchForm
          initialQuery={initialQuery}
          onSubmit={query => search(query)}
        />

        <div className="row">
          {shows.map(show => (
            <div className="col col-4" key={show.id}>
              {/*<Poster image={show.image} name={show.name} />*/}
              <Poster {...show} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
