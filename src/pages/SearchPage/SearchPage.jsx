import React, { Component } from 'react'
import axios from 'axios'

export class SearchPage extends Component {
  state = {
    clickCt: 0,
    shows: [],
  }

  handleClick = () => {
    this.setState({ clickCt: this.state.clickCt + 1 })
    const url = 'https://api.tvmaze.com/search/shows?q=batman'
    axios.get(url).then(({ data }) => this.setState({ shows: data }))
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

          <pre>{JSON.stringify(this.state.shows, null, 2)}</pre>

          <div className="input-group">
            <input type="search" className="form-control" />
            <div className="input-group-append">
              <button onClick={this.handleClick} className="btn btn-primary">
                search
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
