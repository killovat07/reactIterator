import React from 'react';
// import './iterator-panel.css';

const IteratorPanel = ({iteratorCount}) => {
  return (
    <div className="app-header d-flex">
      <h1 ><span class="badge badge-secondary">{iteratorCount}</span></h1>
    </div>
  );
};

export default IteratorPanel;
