import React, {Component} from 'react';

import IteratorPanel from '../iterator-panel/iterator-panel';
import IteratorBtns from '../iterator-btns/iterator-btns';

import './app.css';

export default class App extends Component {

  state = {
    iteratorCount: 30, //default value
  };

  onIteratorChange = (operand, currentCount) => {
    const iteratorCount = this.setOperand(operand, currentCount);
    console.log(currentCount)
    this.setState({iteratorCount})
  };

  setOperand(operand, currentCount){
    switch(operand){
      case 'increment': 
        return currentCount+1;
      case 'decrement': 
        return currentCount-1;
      default:
          return currentCount;
    }
  }

  render(){
    const { iteratorCount } = this.state;

    return (
      <div className="iterator-app">
        <h1>Iterator App</h1>
        <div className="top-panel flex-row d-flex align-items-center">
          <IteratorPanel iteratorCount={iteratorCount}/>
          <IteratorBtns iteratorCount={iteratorCount}
          onIteratorChange={this.onIteratorChange}/>
        </div>
      </div>
    );
  };
}