import React from 'react';
import MemoryItem from './MemoryItem';

class MemoryList extends React.Component {
  constructor() {
    super();

  }

  render() {
    var memories = this.props.memories
    console.log(memories)
    var display = memories.map((item) => {
      return <MemoryItem key={item.id} memory={item} />
    })
    return(
      <div className="memory-list-container">
        {display}
      </div>
    )
  }
}

module.exports = MemoryList;
