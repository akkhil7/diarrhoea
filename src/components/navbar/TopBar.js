import React from 'react';

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <h2> {this.props.title} </h2>
      </div>
    )
  }
}

module.exports = TopBar
