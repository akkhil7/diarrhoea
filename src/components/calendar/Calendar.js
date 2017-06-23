import React from 'react';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import API from '../API.js';
const birthdays = {
  3: [{ name: 'Mirko', age: 35 }, { name: 'Gianluca', age: 29 }],
  8: [{ name: 'Elena', age: 21 }],
  9: [{ name: 'Irene', age: 43 }],
  12: [{ name: 'Paolo', age: 78 }, { name: 'Giorgia', age: 18 }],
  18: [{ name: 'Claudia', age: 54 }],
  22: [{ name: 'Maria', age: 9 }, { name: 'Luigi', age: 67 }],
  25: [{ name: 'Simone', age: 31 }],
  26: [{ name: 'Marta', age: 46 }],
};
class Calendar extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
    var url = API.url('notes')

    var success = (res) => {
      console.log(res)
      this.setState({notes:res})
      this.toggleDayBox();
      
    }

    var failure = (res) => {
      console.log(res)
    }

    API.get(url,success,failure)


  }

  toggleDayBox() { //getting each day of the month from calendar
    const notes = this.state.notes
    console.log(notes)
    const days = []
    for(var i = 0; i<notes.length; i++) {
      const createdDate = new Date(notes[i].created_at)
      const createdDay = createdDate.getUTCDate();
      days.push(createdDate);
    }

    this.setState({days});

  }

  render() {
    console.log(this.state.days)
    const modifiers = {
      highlight: this.state.days,
    }

    const modifiersStyles = {
      highlight: {
        color: '#ffffff',
        backgroundColor: '#4ab8f7',
        cursor: 'pointer'
      }
    }

    console.log(modifiers)
    return(
      <div className="calendar-container">
      <DayPicker 
      onDayClick={day => alert(day)}
      modifiers={modifiers}
      modifiersStyles = {modifiersStyles}
      />
      </div>

    )
  }
}

module.exports = Calendar;
