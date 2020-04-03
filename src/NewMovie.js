import React from 'react';
import { useMoviesContext } from './MoviesContext';

const getInitialMovieForm = () => {
  return {
    title: '',
    year: '',
  };
};

export const NewMovie = () => {
  const [form, setForm] = React.useState(getInitialMovieForm);
  const { addMovie } = useMoviesContext();

  const resetForm = () => {
    setForm(getInitialMovieForm());
  };

  const handleSubmit = event => {
    event.preventDefault();
    addMovie(form);
    resetForm();
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="NewMovie" onSubmit={handleSubmit}>
      <input placeholder="Movie Title" name="title" value={form.title} onChange={handleChange} />
      <input placeholder="1995" type="number" name="year" value={form.year} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};
