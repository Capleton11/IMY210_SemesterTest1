

// Event Component
class Event extends React.Component {
  render() {
    const { name, date, description } = this.props.event;

    return (
      <div>
        <h1>{name}</h1>
        <h3>{date}</h3>
        <h4>{description}</h4>
      </div>
    );
  }
}


// EventFeed Component

class EventFeed extends React.Component {
  render() {
    return (
      <div>
        {this.props.eventsList.map((anEvent, index) => (
          <Event key={index} event={anEvent} />
        ))}
      </div>
    );
  }
}
// Search Component
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.props.handleSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <h4 style={{ marginRight: '10px' }}>Search:</h4>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search something..."
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}


// App Component
class App extends React.Component{

  constructor(props){
    super(props);
    this.events = [
      {
        name: "A Walk in the Park",
        date: "2021-09-19",
        description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
      },
      {
        name: "Beach Day!",
        date: "2019-12-28",
        description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
      },
      {
        name: "Pokemon Go Meetup",
        date: "2016-06-11",
        description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
      },
      {
        name: "Crochet Date!",
        date: "2024-07-09",
        description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
      },
      {
        name: "Yoga in the Morning",
        date: "2022-07-15",
        description: "Join us for a refreshing morning #yoga session #wellness #morning"
      },
      {
        name: "Hackathon",
        date: "2023-03-10",
        description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
      },
      {
        name: "Summer Braai",
        date: "2021-08-05",
        description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
      },
      {
        name: "Art Exhibition",
        date: "2018-05-20",
        description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
      },
      {
        name: "Star Wars Under the Stars",
        date: "2023-05-04",
        description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
      },
      {
        name: "Live Concert: Rock the Night",
        date: "2023-06-25",
        description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
      },
      {
        name: "Farmers Market",
        date: "2024-04-01",
        description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
      },
      {
        name: "Comicon Anyone?",
        date: "2024-09-26",
        description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
      }
    ];
    this.state = {
      feedState: this.events,
    };
    this.searchFeed = this.searchFeed.bind(this);

  }

  searchFeed(searchTerm) {
    const { feedState } = this.state;
    let filteredEvents;

    if (searchTerm === "") {
      filteredEvents = this.events;
    } else if (searchTerm.startsWith('#')) {
      filteredEvents = this.events.filter(event => event.description.includes(searchTerm));
    } else {
      filteredEvents = this.events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    this.setState({ feedState: filteredEvents });
  }

 
  render(){

    return(
      <div>
        <h1>Event!</h1>
        <h3>Search</h3>
        <Search handleSearch={this.searchFeed} />
        <EventFeed eventsList={this.state.feedState} />
      </div>
    );
  }
}
// render here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// complete this code