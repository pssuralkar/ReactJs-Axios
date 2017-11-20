import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.setState({
          photos: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photo Search</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <PhotoList data={this.state.photos} />
        </div>
      </div>
    );
  }
}
