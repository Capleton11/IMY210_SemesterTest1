import React from 'react';
import { withRouter } from 'react-router-dom';
import Post from './post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  fetchPosts() {
    const { id } = this.props.params; 
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({ error: 'No posts found for this user.', posts: [] });
        } else {
          this.setState({ posts: data, error: null });
        }
      })
      .catch(() => this.setState({ error: 'Failed to fetch posts.' }));
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchPosts();
    }
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <h1>User {this.props.params.id}'s Posts</h1>
        {error && <p>{error}</p>}
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default withRouter(Posts);