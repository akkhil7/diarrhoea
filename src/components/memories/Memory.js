import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar';
import FlipButton from './FlipButton';
import MemoryList from './MemoryList'
class Memory extends React.Component{
  constructor() {
    super();
    this.state = {
      isAllClicked: false,
    }
  }
  handleFilterAll = (e) => {
    e.preventDefault();
    this.setState({isAllClicked: !this.state.isAllClicked})
  }

  componentDidMount() {
    //this.props.dispatch(loadMemories())
  }
  render(){
    if(this.state.isAllClicked)
      var allButtonClass = "blue"
    else
      var allButtonClass =  ""
    return(
      <div className="memory-wrapper">
        <Navbar isLight={true} />
        <TopBar title="MEMORIES" />
        <div className="memory-container">
          <button className={allButtonClass} onClick={this.handleFilterAll}> All </button>
          <FlipButton />
          <MemoryList />
        </div>
      </div>
    )
  }
}

module.exports = Memory;

