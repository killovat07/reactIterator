import React, {Component} from 'react';
// import './iterator-btns.css';

export default class IteratorBtns extends Component {

    buttons = [
      { name: 'increment', iconName: 'plus' },
      { name: 'decrement', iconName: 'minus' }
    ]
  
    render() {
      const { iteratorCount, onIteratorChange } = this.props;
  
      const buttons = this.buttons.map(({name, iconName}) => {
        // const isActive = onfilter === name;
        // console.log(onfilter)
        // const clazz = isActive ? 'btn-info' : 'btn-outline-secondary' 
        return (
        <button type="button"
            className={`btn btn-info`} key={name} onClick={() => onIteratorChange(name, iteratorCount)}>
            <i className={`fa fa-${iconName}`}></i>
        </button>
        );
      });
      
      return (
        <div className="btn-group">
          {buttons}
        </div>
      );
    }
  }