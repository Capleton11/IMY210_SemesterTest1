import React from 'react';
import EditPost from './EditPost';
//u22554875 Capleton Chapfika
class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            isEditing: false,
            title: this.props.title,
            author: this.props.author,
            description: this.props.description,
        }
    }

    toggleEdit = ()=>{
        this.setState({isEditing: !this.state.isEditing})
    };
    updatePost = (title, description) => {
        this.setState({ title, description, isEditing: false });
    };
    
   
  render() {
    const { title, author, description } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <hr></hr>
        <p>{description}</p>
        <button onClick={this.toggleEdit}>
          {this.state.isEditing ? 'Cancel' : 'Edit Post'}
        </button>
        {this.state.isEditing && (
          <EditPost
            title={title}
            description={description}
            onSave={this.updatePost}
          />
        )}
      </div>
    );
  }
}

export default Post;