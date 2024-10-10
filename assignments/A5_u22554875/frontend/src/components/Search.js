import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    if (searchTerm.trim()) {
      this.props.onSearch(searchTerm); // Pass search term to parent component
    }
  };

  render() {
    return (
      <div>
        
        <textarea
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <br></br>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;