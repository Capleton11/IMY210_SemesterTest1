import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarWars from './components/StarWars';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<StarWars />} />
        </Routes>
      </Router>
    );
  }
}

export default App;