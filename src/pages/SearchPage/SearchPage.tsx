import React, { Component } from 'react'
import axios from 'axios'
import { Show, ShowResponse } from '../../models/tv.models'
import { ShowTitle } from '../../components/ShowTitle/ShowTitle'
import { Poster } from '../../components/Poster/Poster'

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
    this.handleClick()
  }

  handleClick = () => {
    this.setState({ clickCt: this.state.clickCt + 1 })
    const url = 'https://api.tvmaze.com/search/shows?q=flash'
    axios
      .get<ShowResponse[]>(url)
      .then(({ data }) =>
        this.setState({ shows: data.map(({ show }) => show) }),
      )
  }

  render() {
    // console.count('Render')

    return (
      <div className="row">
        <section className="col col-3">
          <h2 className="h3">Bookmarks</h2>
        </section>

        <section className="col">
          <h1 className="h3">Search {this.state.clickCt}</h1>

          <div className="input-group">
            <input type="search" className="form-control" />
            <div className="input-group-append">
              <button onClick={this.handleClick} className="btn btn-primary">
                search
              </button>
            </div>
          </div>

          {/*{this.state.shows[0] && (*/}
          {/*  <ShowTitle title={this.state.shows[0].name} />*/}
          {/*)}*/}

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
