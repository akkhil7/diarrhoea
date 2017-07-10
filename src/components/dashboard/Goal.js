import React from 'react';
import GoalChild from './GoalChild.js';

class Goal extends React.Component{
  toggleGoal = (e,goal) => {
    var goal = this.props.goal;
    this.props.toggleGoal(e,goal);
  }

  componentDidMount() {
    this.adjustWidth();
  }

  adjustWidth() {
    const connector = document.getElementsByClassName('goal-child-connector')
    for(var i=0;i<connector.length;i++){
      var partOne = 100/connector.length      
      connector[i].style.width = `calc(${partOne}% - 30px)`;
    }

  }
  render(){
    const goals = this.props.goals
    var i = 1
    var isLast = false;
    const display = goals.map((item) => {
      if(i==goals.length)
        var isLast = true
      console.log(i++)
      return(
        <GoalChild key={item.id} isLast={isLast} toggleGoal={this.props.toggleGoal} goal={item} />
      )
    })
    return(
      <div className="goal-container">
        {display}
      </div>
    )
  }
}

module.exports = Goal;

