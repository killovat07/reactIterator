import React, {Component} from 'react';

import './app.css';

export default class App extends Component {

  state = {
    count: 30, //default value
  };

  onCounterIncrement = () => {
    this.setState(({count}) => {  
      return {count: count+1}
    });
  };

  onCounterDecrememnt = () => {
    this.setState(({count}) => {  
      return {count: count-1}
    });
  };

  render(){
    const { count } = this.state;

    return (
      <div className="counter-app">
        <div className="counter-title">Counter</div>
        <div className="counter-block flex-row d-flex align-items-center justify-content-center">

        <button type="button"
          className="btn btn-info"
          onClick={() => this.onCounterDecrememnt()}>
          <i className="fa fa-minus"></i>
         </button>

          <h1><span className="badge badge-secondary">{count}</span></h1>

          <button type="button"
          className="btn btn-info"
          onClick={() => this.onCounterIncrement()}>
          <i className="fa fa-plus"></i>
         </button>

        </div>
      </div>
    );
  };
}