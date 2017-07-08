import React from 'react';


class GoalsItem extends React.Component{
	constructor(){
		super()
	}

	render(){
		var goal = this.props.goal.description;
		return(
			<div>
				<p>{goal}</p>
			</div>
			);
	}
}

module.exports = GoalsItem;