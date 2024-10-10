import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
//u22554875 Capleton Chapfika
export class App extends React.Component {

  render(){
    return (
      <Router>
        <div>
        <nav>
            <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
          </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
         
          
        </div>
      </Router>
    );
}
};

export default App;