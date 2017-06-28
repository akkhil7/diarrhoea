import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';

class GoalChild extends React.Component {
  
  toggleGoal = (e) => {
    this.props.toggleGoal(e);
  }
	render(){
    const goal = this.props.goal
		return(
      <div className="goal-child-container">
        <div className="goal-child-connector">
        </div>
        <div onClick={this.toggleGoal} className="goal-child-circle">
        </div>
      </div>
			)
	}
}

module.exports = GoalChild;


