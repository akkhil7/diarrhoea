import React from 'react';
import Calendar from '../calendar/Calendar.js';

class Dashboard extends React.Component{
	render(){
		return(
      <div className="dashboard-container">
        <Calendar />
      </div>
			)
	}
}

module.exports = Dashboard;
