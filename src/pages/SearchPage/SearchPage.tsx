import React, { Component, MouseEvent } from 'react'
import axios from 'axios'
import { Show, ShowResponse } from '../../models/tv.models'
import { ShowTitle } from '../../components/ShowTitle/ShowTitle'
import { Poster } from '../../components/Poster/Poster'
import { SearchForm } from '../../components/SearchForm/SearchForm'

type State = {
  clickCt: number
  shows: Show[]
}

export class SearchPage extends Component<{}, State> {
  title: 'Hello'

  state: State = {
    clickCt: 0,
    shows: [],
  }

  componentDidMount(): void {
    this.search('batman')
  }

  search = (query: string) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    axios
      .get<ShowResponse[]>(url)
      .then(({ data }) =>
        this.setState({ shows: data.map(({ show }) => show) }),
      )
  }

  render() {
    console.count('Render')

    return (
      <div className="row">
        <section className="col col-3">
          <h2 className="h3">Bookmarks</h2>
        </section>

        <section className="col">
          <h1 className="h3">Search {this.state.clickCt}</h1>

          <SearchForm
            initialQuery="batman"
            onSubmit={query => this.search(query)}
          />

          <div className="row">
            {this.state.shows.map(show => (
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
}
