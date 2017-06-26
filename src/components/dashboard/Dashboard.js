import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';

class Dashboard extends React.Component{
	render(){
		return(
      <div className="dashboard-container">
        <Navbar isLight={true}/>
        <Calendar />
      </div>
			)
	}
}

module.exports = Dashboard;
