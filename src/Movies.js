import React from 'react';
import { Movie } from './Movie';
import { useMoviesContext } from './MoviesContext';

export const Movies = () => {
  const { movies } = useMoviesContext();

  return (
    <section className="Movies">
      <h2>My Movies</h2>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
