import React from 'react';


class GoalsItem extends React.Component{
	constructor(){
		super()
	}

	render(){
		var goal = this.props.goal.description;
		return(
			<div>
				<h2>{goal}</h2>
			</div>
			);
	}
}

module.exports = GoalsItem;