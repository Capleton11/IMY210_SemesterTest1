export const getCharacterById = async (id) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - Character not found.`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return { error: error.message };
    }
  };
  
  // Function to get a character by name
  export const getCharacterByName = async (name) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - Search failed.`);
      }
      const data = await response.json();
      if (data.count === 0) {
        throw new Error("Character not found.");
      }
      return data.results[0];
    } catch (error) {
      return { error: error.message };
    }
  };