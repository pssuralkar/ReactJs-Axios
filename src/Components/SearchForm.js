import React, { Component } from 'react';

export default class SearchForm extends Component {

  state = {
    searchText: ''
  }

  render() {
    return (
      <form className="search-form">
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               name="search"
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}
