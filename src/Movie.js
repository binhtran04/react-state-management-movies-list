import React from 'react';
import { useMoviesContext } from './MoviesContext';

export const Movie = ({ movie }) => {
  const { markWatchedMovie } = useMoviesContext();

  const handleCheckboxChange = () => {
    markWatchedMovie(movie.id);
  };

  return (
    <article className="Movie">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <div className="Movie-actions">
        <label className="Movie-watched">
          <input type="checkbox" checked={movie.watched} onChange={handleCheckboxChange} />
          Watched
        </label>
      </div>
    </article>
  );
};
