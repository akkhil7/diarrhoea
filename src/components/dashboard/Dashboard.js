import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';
import Goal from './Goal.js'; 
import { loadCalendarData,toggleGoal } from '../../actions/dashBoardActions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
   note: store.dashboard.note,
   goal: store.dashboard.goal,
   showGoal: store.dashboard.showGoal
  }
}

class Dashboard extends React.Component{
  toggleGoal = (e,goal) => {
    e.preventDefault();
    this.props.dispatch(toggleGoal(e,goal))
  }
	componentDidMount(){
		this.props.dispatch(loadCalendarData())
	}
	render(){
    if(this.props.showGoal)
      var displayGoal = ( 
                     <div className="goal-preview">
                      <p>{this.props.goal.goal}</p>
                     </div>
                    )
		return(
      <div className="dashboard-container">
        <Navbar isLight={true}/>
        <Calendar />
        <Goal toggleGoal={this.toggleGoal}/>
        {displayGoal}
      </div>
			)
	}
}

Dashboard = connect(mapStateToProps)(Dashboard);

module.exports = Dashboard;
