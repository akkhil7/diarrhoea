import React from 'react';
import MemoryItem from './MemoryItem';

class MemoryList extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="memory-list-container">
      <h2> HELLO MEMORY LIST </h2>
      <MemoryItem />
      </div>
    )
  }
}

module.exports = MemoryList;
