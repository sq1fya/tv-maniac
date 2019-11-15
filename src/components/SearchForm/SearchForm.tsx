import React, { Component } from 'react'

{
  /*<SearchForm initialQuery="batman" onSubmit={(query) => this.search(query)} />*/
}

type Props = {
  initialQuery?: string
  onSubmit: (query: string) => void
}

type State = {
  query: string
}

export class SearchForm extends Component<Props, State> {
  state: State = {
    query: this.props.initialQuery,
  }

  render() {
    return (
      <form className="input-group mb-3">
        <input
          type="search"
          value={this.state.query}
          className="form-control"
          onChange={event => this.setState({ query: event.target.value })}
        />
        <div className="input-group-append">
          <button
            onClick={event => {
              event.preventDefault()
              this.props.onSubmit(this.state.query)
            }}
            className="btn btn-primary"
          >
            search
          </button>
        </div>
      </form>
    )
  }
}
