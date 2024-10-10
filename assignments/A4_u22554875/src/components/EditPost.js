import React from 'react';
//u22554875 Capleton Chapfika
class EditPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
          };
    }
   
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSave(this.state.title, this.state.description);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <br></br>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Description</label>
          <br></br>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <button type="submit">Save</button>
        </form>
      );
    }
  }
  
  export default EditPost;