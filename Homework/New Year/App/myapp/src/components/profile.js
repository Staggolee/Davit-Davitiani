import React, { Component } from 'react'
import Register from "./Register"

export default class profile extends Component {
    state ={
        profiles : [
        
            { name: null, age: null, gender: null }
        ]
    }

    addProfile = (profile) => {
        console.log(profile)
    }
  render() {
    return (
      <div>
        <Register addProfile={this.addProfile}/>
      </div>
    )
  }
}

