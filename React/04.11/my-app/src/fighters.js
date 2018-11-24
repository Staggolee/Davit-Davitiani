import React, {Component} from 'react'


export default class Fighters extends Component{
    render(){
        const {fighters} = this.props
        const fighterList = fighters.map(fighter => {
            return(
        <div className = "fighter" key = {fighter.id}>
           <div>name: {fighter.name}</div>
           <div>age: {fighter.age}</div>
           <div>style: {fighter.style}</div>
           
        </div>
    )
})

return(
    <div className="fighter-list">
        {fighterList}
    </div>
)
    }
}