import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      term: ''
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.term.toLowerCase();
    this.props.search(searchTerm);
  }

  render() {
    return(
      <form className="search-bar">
        <input 
          type="text" 
          value={this.state.term} 
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;