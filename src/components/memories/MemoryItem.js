import React from 'react';
import moment from 'moment';
import _ from 'lodash';
class MemoryItem extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  createMarkup = () => {
    return { __html: this.props.memory.entry };
  }

  render() {
    const memory = this.props.memory
    const dateMonth = _.upperCase(moment(memory.created_at).format("MMM"));
    const dateDay = moment(memory.created_at).format("D")
    //console.log(date)

    return(
      <div className="memory-item-container">
        <div className="memory-item-date">
          <span className="memory-item-date-month">{dateMonth}</span>
          <span className="memory-item-date-day">{dateDay}</span>
        </div>
        <h2 className="memory-item-title"> Figments of imagination is the first post I am writing here. </h2>
      </div>
    )
  }
}


module.exports = MemoryItem;
