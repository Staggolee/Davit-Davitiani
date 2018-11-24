import React, {Component} from 'react';

export default class Davit extends Component{
    render(){
        
        const{davit} = this.props
        const davitList = davit.map(persons => {
            return(
                <div className='davit' key = {persons.id}>
                <div>Name: {persons.name}</div>
                <div>Age: {persons.age}</div>
                <div>Belt: {persons.belt}</div>
            </div>
            )

        })
        return(
            <div className="davit-list">
                {davitList}
            </div>
        
        )
    }
}