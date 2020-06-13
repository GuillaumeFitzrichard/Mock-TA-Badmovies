import React from 'react';
import axios from 'axios';
import genresData from './genresTempData.js';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
      // value: 'Action'
    };
    // this.getGenres = this.getGenres.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // getGenres() {
    

    //   axios.get('http://localhost:3000/genres')
    //   .then(response => {
    //     console.log('this is search.jsx', response);
    //     const genres = response.data.genres;
    //     this.setState({ genres });
    //   })
    //   //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    
    // }

    // *state isn't setting the way I'd expected?
    componentDidMount() {
      this.setState({
        genres: genresData.genres
      }, console.log('states set', this.state))
    }
    handleChange(event) {
      const value = event.target.value
      const key = event.target.id
      this.setState({
        [key]: value
      
      }, console.log('state from handlechange', this.state)
      )}

    //also not getting what I was hoping to here with the handleChange setState?
    // tried to log a number of things, getting either the entire array of genres, nothing or an error............................

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select value={this.state.value} id={this.state.id} onChange={this.handleChange}>
          {this.state.genres.map((item) => {
      return(<option value={item.name} key={item.id} id={item.id} >{item.name}</option>)})}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;