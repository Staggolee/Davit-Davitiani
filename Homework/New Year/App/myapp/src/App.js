import React, { Component } from 'react';
import './App.css';
import Register from "./components/Register"
import Profile from "./components/profile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register/>
        <Profile/>
      </div>
    );
  }
}

export default App;
