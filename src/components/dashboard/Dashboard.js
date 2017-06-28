import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';
import { loadCalendarData } from '../../actions/dashBoardActions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
   note: store.dashboard.note,
   days: store.dashboard.days,
   loadedCalendar: store.dashboard.loadedCalendar
  }
}

class Dashboard extends React.Component{
	componentDidMount(){
		this.props.dispatch(loadCalendarData())
	}
	render(){
		var note = this.props.note;
		var days = this.props.days;
		if(this.props.loadedCalendar)
			var displayCalendar = <Calendar note={note} days={days} />
		else
			var displayCalendar = ""
		return(
      	<div className="dashboard-container">
        	<Navbar isLight={true}/>
        	{displayCalendar}
      	</div>
			)
	}
}

Dashboard = connect(mapStateToProps)(Dashboard);

module.exports = Dashboard;
