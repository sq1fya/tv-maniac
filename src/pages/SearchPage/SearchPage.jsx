import React from 'react'

export const SearchPage = () => (
  <div className="row">
    <section className="col col-3">
      <h2 className="h3">Bookmarks</h2>
    </section>

    <section className="col">
      <h1 className="h3">Search</h1>

      <div className="input-group">
        <input type="search" className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-primary">search</button>
        </div>
      </div>
    </section>
  </div>
)
