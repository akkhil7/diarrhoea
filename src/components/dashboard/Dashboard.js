import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';
import { loadCalendarData } from '../../actions/dashBoardActions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
   note: store.dashboard.note
  }
}

class Dashboard extends React.Component{
	componentDidMount(){
		this.props.dispatch(loadCalendarData())
	}
	render(){
		return(
      <div className="dashboard-container">
        <Navbar isLight={true}/>
        <Calendar />
      </div>
			)
	}
}

Dashboard = connect(mapStateToProps)(Dashboard);

module.exports = Dashboard;
