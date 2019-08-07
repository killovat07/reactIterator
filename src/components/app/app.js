import React, {Component} from 'react';

// import IteratorPanel from '../iterator-panel/iterator-panel';
// import IteratorBtns from '../iterator-btns/iterator-btns';

import './app.css';

export default class App extends Component {

  state = {
    iteratorCount: 30, //default value
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
  };

  onIteratorChange = (currentOperand) => {
    const iteratorCount = this.setOperand(currentOperand, this.state.iteratorCount)
    this.setState({iteratorCount})
  };

  buttons = [
    { operandName: 'increment', iconName: 'plus', orderCount: 3 },
    { operandName: 'decrement', iconName: 'minus', orderCount: 1}
  ];

  render(){
    const { iteratorCount } = this.state;

    const buttons = this.buttons.map(({operandName, iconName, orderCount}) => {
      return (
      <button type="button"
          className={`btn btn-info order-${orderCount}`}
          key={operandName}
          onClick={() => this.onIteratorChange(operandName)}>
          <i className={`fa fa-${iconName}`}></i>
      </button>
      );
    });

    return (
      <div className="iterator-app">
        <div class="main-title">Counter</div>
        <div className="top-panel flex-row d-flex align-items-center justify-content-center">
          <h1 class="order-2"><span class="badge badge-secondary">{iteratorCount}</span></h1>
          {buttons}
        </div>
      </div>
    );
  };
}