import React, { Component } from 'react'

export class Register extends Component {
    state = {
        name : null,
        age: null,
        gender: null

        }

        handleCHange = (e) =>{
          this.setState ({
            [e.target.id] : e.target.value
          })
        }
        submitChange = (e) =>{
          e.preventDefault()
          this.props.addProfile(this.state)
        }
  render() {
    return (
      <div>
        <form onSubmit={this.submitChange}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleCHange}/>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" onChange={this.handleCHange}/>
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" onChange={this.handleCHange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Register
