import React from 'react';
import GoalsItem from './GoalsItem';

class GoalsList extends React.Component{
	constructor(){
		super();
	}
	componentDidMount() {
		console.log(this.props.currentGoals);
	}
	render(){
		var goals=this.props.currentGoals;
		
		var display = goals.map(function(goal){
			return <GoalsItem key={goal.id} goal = {goal} />
		})
		return(
			<div>
           		{display}
			</div>
			);
	}
}

module.exports = GoalsList;
