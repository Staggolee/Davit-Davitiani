import React, { Component } from 'react';


import {api as API} from './configs/api'
import Photos from './components/photos'

const URL = API.baseURL + API.photos;

class App extends Component {
  state = {
    data: null
  }
  componentDidMount(){
    fetch(API.baseURL + API.photos)
    .then(data => data.json())
    .then(data => this.setState({data}))
  }
  render() {
    return (
      <div className="App">
        {
          (!! this.state.data && URL.endsWith(API.photos)) && <Photos data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
