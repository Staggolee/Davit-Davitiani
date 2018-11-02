import React, { Component } from 'react';
import './App.css';
import {username, lastname} from './Play'
import developer from './Play';
import counter from './counter'


function SaySomething(props){
  return <p>{props.text}</p>
}

const styles = {color:'red', padding: '30px', border:'2px dashed black'}
const FooComponent = (props) => {
  return (
    <div style ={{...styles}}>
      <p>{props.text}</p>
    </div>
  )
}

class App extends Component {
  randomText(){
    return `Random Text = ${developer.name} and ${developer.lastname}`;
  }
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <h2>{ this.randomText() }</h2>
        <SaySomething text ="Lorem Ipsum Dolar"/>
        <FooComponent text ="Some lorem ipsum again"/>
        <hr/>
        <div style={{...styles}}>
          <counter/>
        </div>
      </div>
    )
  }
}

export default App;
