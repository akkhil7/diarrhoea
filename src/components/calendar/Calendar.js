import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import API from '../API.js';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectNote } from '../../actions/noteActions';

const mapStateToProps = (store) => {
  return {
    selectedNote: store.note.selectedNote
  }
}

class Calendar extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedNote: {},
      flag: false
    }
  }

  componentDidMount() {
      this.modifyCalendarStyle();
  }

  modifyCalendarStyle() {
    const nodes = document.getElementsByClassName('DayPicker-Day--highlight')
    console.log(nodes)
    for(var i=0;i<nodes.length;i++) {
      nodes[i].firstChild.style.backgroundColor = '#00a2ff';
      nodes[i].firstChild.style.boxShadow = '0 0 3px #00a2ff';
    }
  }

  handleDayClick(day,modifiers,event) {

    console.log(event)
    const node = event.target
    const notes = this.props.note
    const dayDate = new Date(day)
    dayDate.setHours(0,0,0);
   // console.log(dayDate)
    var flag = false;
    for(var i=0;i<notes.length;i++) {
      const noteDate = new Date(notes[i].created_at)
      noteDate.setHours(0,0,0,0);
      console.log(dayDate)
      console.log(noteDate)
      if (+dayDate === +noteDate)
        {
          const note = notes[i]
          this.props.dispatch(selectNote(note));
          break;
        }
    } // found note corresponding to date

  }

  handlePreviewClose() {
    this.props.dispatch(selectNote({}));
  }
  
  render() {
    const modifiers = {
      highlight: this.props.days,
    }

    const modifiersStyles = {
      highlight: {
        color: '#ffffff',
        cursor: 'pointer',
      }
    }
    var displayPreview = ""
    const selectedNote = this.props.selectedNote
    if(!_.isEmpty(this.props.selectedNote))
    {
      displayPreview = (<div className="display-preview">
                          <img src="close.svg" className="close" onClick={this.handlePreviewClose.bind(this)} />
                          <h2>{selectedNote.entry} - My name is Akhil and how I bought a Lamborghini at the age of 23!</h2>
                        </div>)
    }


    console.log(modifiers)
    return(
      <div className="calendar-container">
        <div className="calendar-component">
        <DayPicker 
        onDayClick={this.handleDayClick.bind(this)}
        modifiers={modifiers}
        modifiersStyles = {modifiersStyles}
        />
        </div>
        {displayPreview}        
      </div>

    )
  }
}
 
Calendar = connect(mapStateToProps)(Calendar);

module.exports = Calendar;