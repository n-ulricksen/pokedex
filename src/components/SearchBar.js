import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      term: ''
    });
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    this.setState({term: e.target.value});
  }

  submit(e) {
    e.preventDefault();
    this.props.search(this.state.term);
  }

  render() {
    return(
      <form className="search-bar">
        <input 
          type="text" 
          value={this.state.term} 
          onChange={this.onChange}
          className="" />
        <button onClick={this.submit} className=""
          >Search
        </button>
      </form>
    );
  }
}

export default SearchBar;