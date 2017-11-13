import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  search(search) {
    this.props.onSearch(search);
  }

  handleSearchChange(event) {
    this.setState({searchResults: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearchChange}/>
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
