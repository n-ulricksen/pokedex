import React, { Component } from 'react';

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

  submit() {
    let searchTerm = this.state.term;
    this.props.search(searchTerm);
  }

  render() {
    return(
      <div className="search-bar">
      <input type="text" value={this.state.term} onChange={this.onChange} />
        <button onClick={this.submit}>Click Me</button>
      </div>
    );
  }
}

export default SearchBar;