import React from 'react';
import { Movies }  from './Movies';
import './App.scss';
import {MoviesProvider} from './MoviesContext';
import {NewMovie} from './NewMovie';

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <NewMovie />
        <Movies />
      </MoviesProvider>
    </div>
  );
}

export default App;
