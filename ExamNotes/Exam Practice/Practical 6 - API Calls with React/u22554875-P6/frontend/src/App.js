import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts/:id" element={<Posts />} />
        </Routes>
      </Router>
    );
  }
}

export default App;