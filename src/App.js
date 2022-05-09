import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import {connect} from 'react-redux'
import { add, addNumber, AsyncAdd, sub } from './Redux/actions/actions'


class App extends Component {
  handleClick =(value)=>{
    this.setState({
      counter: this.state.counter + value
    })
    
  }

  render() {
    console.log('App', this.props);
    return (
    <div className="App">
      <h1>{this.props.counter}</h1>
      <hr/>
      <div>
        <button onClick={this.props.onSub}>Decrease</button>
        <button onClick={this.props.onAdd}>Increase</button>
      </div>
      <div>
        <button onClick={()=>this.props.addNumber(16)}>Decrease 16</button>
        <button onClick={()=>this.props.addNumber(-20)}>Increase -20</button>
      </div>
      <div>
        <button onClick={()=>this.props.onAsyncAdd(100)}>Async add 100</button>
      </div>
      <Counter/>

    </div>
  );
  }
}

function mapStateToProps(state){
  console.log(state);
  return {
      counter: state.counter1.counter
  }
}
function mapDispatchToProps(dispatch){
  return {
    onAdd: ()=> dispatch(add()),
    onSub: ()=> dispatch(sub()),
    addNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(AsyncAdd(number))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
