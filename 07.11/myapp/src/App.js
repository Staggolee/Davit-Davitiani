import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Loader from './Components/Loader'
import Search from './Components/Search'
import List from './Components/List'

const url = 'https://hn.algolia.com/api/v1/search?query='
class App extends Component {
  state = {
    query: 'javascript',
    url,
    data: null,
    isLoading: true,
  }
  componentDidMount(){
    fetch(`${url}${this.state.query}`)
    .then(data => data.json())
    .then(data => {
      this.setState({data, isLoading: false})
      console.log(this.state.data)
    })

  }
  render() {
    return (
      <div className="wrapper">
        <Loader/>
        <Search/>
        {this.state.isLoading><Loader/>}
        {!this.state.isLoading && <List data={this.state.hits} />}
        <List/>
      </div>
    );
  }
}

export default App;
