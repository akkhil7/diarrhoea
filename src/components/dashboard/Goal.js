import React from 'react';
import GoalChild from './GoalChild.js';

class Goal extends React.Component{
  toggleGoal = (e,goal) => {
    var goal = this.props.goal;
    this.props.toggleGoal(e,goal);
  }

  render(){
    const goals = [
      {goal: "wow"},
      {goal: "entho"},
      {goal: "oru sugam"},
      {goal: "plz god give me a gf"}
    ]

    const display = goals.map((item) => {
      return(
        <GoalChild toggleGoal={this.props.toggleGoal} goal={item} />
      )
    })
    return(
      <div className="goal-container">
      {display}
      <div className="goal-child-container">
      <div className="goal-child-circle highlight"></div>
      </div>
      </div>
    )
  }
}

module.exports = Goal;

