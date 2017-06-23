import React from 'react';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <DayPicker onDayClick={day => alert(day)} />
      </div>

    )
  }
}

module.exports = Calendar;
