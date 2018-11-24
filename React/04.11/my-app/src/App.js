import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Davit from './Davit';
import Fighters from './fighters'
import AddNinja from './AddNinja'



class App extends Component {
  state = {
    ninjas:[
    {name: "Davit", age: 25, belt: "black", id: "1" },
    {name: "George", age: 29, belt: "brown", id: "2" },
    {name: "Hades", age: 325, belt: "light", id: "3" }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.rendom;
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    } )
    this.setState({
      ninjas: ninjas
    })
  }

  // state = {
  //   davit : [
  //   {name: "Davit", age: 25, belt: "black", id: "1" },
  //   {name: "Stephan", age: 29, belt: "black", id: "2" },
  //   {name: "Tony", age: 35, belt: "black", id: "3" }
  //   ]
  //   }

  //   state = {
  //     fighters: [
  //       {name: "floyd", age:41, style: "boxing", id: "1"},
  //       {name: "anderson", age:40, style: "bjj", id: "2"},
  //       {name: "lennox", age:46, style: "boxing", id: "3"},
  //       {name: "muhhamad", age:51, style: "boxing", id: "4"},
  //       {name: "george", age:32, style: "mma", id: "5"},
  //       {name: "connor", age:29, style: "mma", id: "6"},
  //       {name: "anthony", age:28, style: "boxing", id: "7"}
  //     ]
  // }
  render() {
    return (
      <div className="App">
        <h1>MY First React App</h1>
        <p>Welcome! :)</p>
        {/* <Fighters fighters={this.state.fighters}/> */}
        <Ninjas deleteNinja={this.deleteNinja} ninjas= {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
        
        {/* <Davit davit = {this.state.davit}/> */}
        {/* <br/>
        <Davit name="Michael" age="75" subject="All About Us"/>
        <br/>
        <Ninjas name='Samuel' lastName='L Jackson' age='55' belt = 'Black'/> */}
      </div>
    );
  }
}

export default App;
