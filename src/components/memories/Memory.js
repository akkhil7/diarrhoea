import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar';
import FlipButton from './FlipButton';
import MemoryList from './MemoryList';
import {connect } from 'react-redux';
import {loadNotes} from '../../actions/noteActions.js';
import _ from 'lodash';

const mapStateToProps = (store) => {
  return {
    notes: store.note.notes,
    loadingNote: store.note.loadingNote,
    loadedNote: store.note.loadedNote
  }
}
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
    this.props.dispatch(loadNotes())
  }
  render(){
    if(this.state.isAllClicked)
      var allButtonClass = "blue"
    else
      var allButtonClass =  ""

    if(this.props.loadedNote)
      var displayMemories = <MemoryList memories={this.props.notes} />
    else
      var displayMemories = ""
    return(
      <div className="memory-wrapper">
        <Navbar isLight={true} />
        <TopBar title="MEMORIES" />
        <div className="memory-container">
          <button className={allButtonClass} onClick={this.handleFilterAll}> All </button>
          <FlipButton />
          {displayMemories}
        </div>
      </div>
    )
  }
}

Memory = connect(mapStateToProps)(Memory);

module.exports = Memory;

