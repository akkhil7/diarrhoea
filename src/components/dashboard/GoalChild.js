import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';

class GoalChild extends React.Component {
  
  toggleGoal = (e) => {
    var goal = this.props.goal;
    this.props.toggleGoal(e, goal);
  }
	render(){
    const goal = this.props.goal
    var connector;
    if(!this.props.isLast)
      connector = (<div className="goal-child-connector">
                       </div>)
		return(
      <div>
        <div onClick={this.toggleGoal} className="goal-child-circle">
        </div>
        {connector}
      </div>
			)
	}
}

module.exports = GoalChild;


