import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialMovies } from './initialState';

const MoviesContext = React.createContext();
const ADD_MOVIE = 'ADD_MOVIE';
const MARK_WATCHED_MOVIE = 'MARK_WATCHED_MOVIE';

const moviesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      const movies = [action.payload, ...state.movies];
      return {
        ...state,
        movies,
      };
    }
    case MARK_WATCHED_MOVIE: {
      const movies = state.movies.map(movie => {
        if (movie.id === action.payload.id) {
          return { ...movie, watched: !movie.watched };
        }

        return movie;
      });

      return {
        ...state,
        movies,
      };
    }

    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const initialState = {
  movies: initialMovies,
};

export const MoviesProvider = props => {
  const [state, dispatch] = React.useReducer(moviesReducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <MoviesContext.Provider value={value} {...props} />;
};

export const useMoviesContext = () => {
  const context = React.useContext(MoviesContext);

  if (!context) {
    throw new Error('useMoviesContext must be used inside a MoviesProvider');
  }

  const { state, dispatch } = context;
  const { movies } = state;

  const addMovie = movie => {
    movie.id = uuidv4();
    movie.watched = false;
    dispatch({ type: ADD_MOVIE, payload: movie });
  };

  const markWatchedMovie = id => {
    dispatch({ type: MARK_WATCHED_MOVIE, payload: { id } });
  };

  return { movies, addMovie, markWatchedMovie };
};
