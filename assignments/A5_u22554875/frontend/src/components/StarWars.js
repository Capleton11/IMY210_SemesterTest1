import React from "react";
import { getCharacterById, getCharacterByName } from "../api";
import Person from "./Person";
import Search from "./Search";

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCharacter: {},
      currentId: 1, // Starting character ID
    };
  }

  componentDidMount() {
    this.fetchCharacterById(this.state.currentId);
  }

  fetchCharacterById = async (id) => {
    const character = await getCharacterById(id);
    this.setState({ currentCharacter: character });
  };

  handleNext = () => {
    const { currentId } = this.state;
    this.fetchCharacterById(currentId + 1);
    this.setState({ currentId: currentId + 1 });
  };

  handlePrevious = () => {
    const { currentId } = this.state;
    if (currentId > 1) {
      this.fetchCharacterById(currentId - 1);
      this.setState({ currentId: currentId - 1 });
    }
  };

  handleSearch = async (searchTerm) => {
    const character = await getCharacterByName(searchTerm);
    this.setState({ currentCharacter: character });
  };

  render() {
    const { currentCharacter, currentId } = this.state;

    return (
      <div>
        <h1>Activity Feed</h1>
        <Search onSearch={this.handleSearch} />
        
        <div>
          <button onClick={this.handlePrevious} disabled={currentId <= 1}>
            Previous
          </button>
          <button onClick={this.handleNext}>Next</button>
        </div>
        <Person character={currentCharacter} />
      </div>
    );
  }
}

export default StarWars;