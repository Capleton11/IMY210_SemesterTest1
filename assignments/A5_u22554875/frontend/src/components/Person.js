import React from "react";

class Person extends React.Component {
  render() {
    const { name, birth_year, eye_color, gender, homeworld, error } = this.props.character;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <h2>Person</h2>
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="text-lg"><span className="font-semibold">Birth Year:</span> {birth_year}</p>
        <p className="text-lg"><span className="font-semibold">Eye Color:</span> {eye_color}</p>
        <p className="text-lg"><span className="font-semibold">Gender:</span> {gender}</p>
        <p className="text-lg"><span className="font-semibold">Homeworld:</span> <a href={homeworld} className="text-blue-400 hover:underline">{homeworld}</a></p>
      </div>
    );
  }
}

export default Person;