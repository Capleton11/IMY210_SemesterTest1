import React from 'react';

class RandomMovies extends React.Component{
  render(){
  return (
    <ul>
      {this.props.movies.map((movie, index) => (
        <li key={index}>
          <h2>{movie.name}</h2>
          <p>{movie.description}</p>
        </li>
      ))}
    </ul>
  );
}
};

export default RandomMovies;