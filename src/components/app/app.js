import React, {Component} from 'react';

import './app.css';

export default class App extends Component {

  state = {
    count: 30, //default value
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

  onCounterChange = (currentOperand) => {
    const count = this.setOperand(currentOperand, this.state.count)
    this.setState({count})
  };

  buttons = [
    { operandName: 'increment', iconName: 'plus', orderCount: 3 },
    { operandName: 'decrement', iconName: 'minus', orderCount: 1}
  ];

  render(){
    const { count } = this.state;

    const buttons = this.buttons.map(({operandName, iconName, orderCount}) => {
      return (
      <button type="button"
          className={`btn btn-info order-${orderCount}`}
          key={operandName}
          onClick={() => this.onCounterChange(operandName)}>
          <i className={`fa fa-${iconName}`}></i>
      </button>
      );
    });

    return (
      <div className="counter-app">
        <div class="counter-title">Counter</div>
        <div className="counter-block flex-row d-flex align-items-center justify-content-center">
          <h1 class="order-2"><span class="badge badge-secondary">{count}</span></h1>
          {buttons}
        </div>
      </div>
    );
  };
}