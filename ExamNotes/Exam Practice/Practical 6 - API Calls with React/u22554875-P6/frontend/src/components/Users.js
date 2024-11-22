import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(error => console.log('Error fetching users:', error));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div key={user.id}>
            <p>{user.name} ({user.email})</p>
            <Link to={`/posts/${user.id}`}>View Posts</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;