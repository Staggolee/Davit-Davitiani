import React, {Component} from  'react';
class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentNumber: 0,
        }
        this.onIncrement = this.onIncrement.bind(this);
    }
    onIncrement(){
        this.setState( state => ({currentNumber: state.currentNumber + 1}))
    }
    render(){
        return (
            <div>
                <p>Counter - { this.state.currentNumber } </p>
                <button onClick={this.onIncrement} type="button">Increment</button>
                <button type="button">Decrement</button>
            </div>
        )
    }

}

export default Counter