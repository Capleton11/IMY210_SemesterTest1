import React from 'react';
import HelloWorld from './HelloWorld';
import RandomMovies from './RandomMovies';

const movies = [
  { name: 'Movie 1', description: 'Description 1' },
  { name: 'Movie 2', description: 'Description 2' },
  { name: 'Movie 3', description: 'Description 3' }
];

class App extends React.Component{
  render(){

  
  return (
    <div>
      <HelloWorld />
      <RandomMovies movies={movies} />
    </div>
  );}
  
};

export default App;