import React, {Component} from 'react';

export default class IteratorBtns extends Component {

    buttons = [
      { operandName: 'increment', iconName: 'plus' },
      { operandName: 'decrement', iconName: 'minus' }
    ]
  
    render() {
      const { onIteratorChange } = this.props;
  
      const buttons = this.buttons.map(({operandName, iconName}) => {
        return (
        <button type="button"
            className={`btn btn-info`}
            key={operandName}
            onClick={() => onIteratorChange(operandName)}>
            <i className={`fa fa-${iconName}`}></i>
        </button>
        );
      });
      
      return (
        <div>
          {buttons}
        </div>
      );
    }
  }