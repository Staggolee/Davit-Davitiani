import React, { Component } from 'react';
import user from './User.js';
import './App.css';

const FETCHURL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    jsonData: null
  }

  componentdidMount(){
    fetch(FETCHURL)
      .then(res => res.json())
      .then( users => this.setState({jsonData:users}))
      .catch(err => console.log(err))
  }
  render() {
    let persons = [
      {name: 'Otiko', id: 1, age:22, isActive: false},
      {name: 'Grigoli', id: 2, age:20, isActive: true},
      {name: 'Mamuka', id: 3, age:20, isActive: true},
      {name: 'Salome', id: 4, age:17, isActive: false},
  ]
  const showList = true;

  // if( !showList ){
  //   return null;
  // } 



    return (
      <div className="App">
      <h2>Using Array.prototype.map()</h2>
        {
          
          showList && (
            
        <ul>
          {persons.map( person => <li key={person.id}> {person.name} {person.age}</li> ) }
        </ul>
          
          )
        }
        
        <h2>Using Array.prototype.filter()</h2>
        <ul>
          { persons 
                   .filter(person => person.isActive)
                   .map( person => <li key={person.id}>{person.name} {person.age}</li>)
          }
        </ul>
        <h2>FETCHURL Data</h2>
        <ul>
          {this.state.jsonData && this.state.jsonData.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        <p>{}</p>
      </div>

      
    );
    
  }
}

export default App;
