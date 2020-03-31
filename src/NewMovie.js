import React from 'react'
import {useMoviesContext} from './MoviesContext'

const getInitialMovieForm = () => {
  return {
    title: '',
    year: '',
  }
}

export const NewMovie = () => {
  const [form, setForm] = React.useState(getInitialMovieForm)
  const { addMovie } = useMoviesContext()

  const resetForm = () => {
    setForm(getInitialMovieForm())
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addMovie({...form, watched: false})
    resetForm()
  }

  const handleChange = (event) => {
    const {type, name, value} = event.target

    if (type === 'number') {
      setForm(prev => ({
          ...prev,
          [name]: Number(value)
        })
      )
    }

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form className="NewMovie" onSubmit={handleSubmit}>
      <input
        placeholder="Movie Title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        placeholder="1995"
        type="number"
        name="year"
        value={form.year}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  )
}
