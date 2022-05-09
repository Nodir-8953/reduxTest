import React, { Component } from 'react'
import {connect} from 'react-redux'
import { add2 } from './Redux/actions/actions'
class Counter extends Component{
    render() {
        return (
            <div style={{margin: 20, padding: 20, border: '1px solid black'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <button onClick={()=>this.props.onChange(1)}>Add</button>
                <button onClick={()=>this.props.onChange(-1)}>Sub</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch){
    return{
        onChange: number=> dispatch(add2(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)