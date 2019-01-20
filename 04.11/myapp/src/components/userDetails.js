import React, { Component } from 'react';
import Details from '/Components/userDetails'
import Address from '/Components/userAddress'
import Company from '/Components/userCompany'

const FETCHURL = 'https://jsonplaceholder.typicode.com/users'
export default class User extends Component {
    state = {
        users: null,
        loading: true
    }
    componentDidMount {
        
            fetch(FETCHURL)
              .then(res => res.json())
              .then( users => {
                  this.setState({users, loading: false})
                .catch(err => 
                })
              
          
    }
    




    render(){
        const {users, loading} = this.state;
        if(loading) {
            return <div>Loading...</div>
        }
        return(
            <div>
                {users.map(user => {
                    <>
                <Details/>
                <Adress/>
                <Details/>
                </>
                })}
                
            </div>
        )

    }
    
}