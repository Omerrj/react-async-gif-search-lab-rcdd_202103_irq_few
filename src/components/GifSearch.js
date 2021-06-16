import React, { useState } from 'react'

export default function(props) {

const [query,setQuery]=useState([])

  const handleSubmit = event => {
    event.preventDefault()
    props.fetchGIFs(query)
  }

  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={event => setQuery(e.target.value)} />
        </form>
      </div>
    )
  }

}