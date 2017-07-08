import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar.js';
import { connect } from 'react-redux';
import {fetchGoals,createGoal} from '../../actions/goalsActions';
import  GoalsList  from './GoalsList';

const mapStateToProps = (store) => {
  return {
  	currentGoals: store.goals.goals
  }
}

class CreateGoals extends React.Component{
	componentDidMount(){
		this.props.dispatch(fetchGoals());
	}
	onSubmit(e){
			e.preventDefault();
			var inputNodes = document.getElementsByTagName('input')[0];
			inputNodes.classList.remove("error");
			this.checkGoals()
	}
	checkGoals() {
			var goal=this.refs.goal.value
			if(!goal){
				setTimeout(() => {
					document.getElementsByClassName("goals-field")[0].classList.add("error")

				}, 50)
			}
			else{
				this.props.dispatch(createGoal(goal))
			}
	}

	render(){
		const currentGoals = this.props.currentGoals;
		console.log(currentGoals);
		return(
			<div>
				<Navbar  isLight={true}/>
				<TopBar title="GOALS" />
				<div className="goals-form-wrapper">
					<h2>Enter your goal</h2>
					<input type="text" className="goals-field" ref="goal"/>
					<input type="submit" value="Set Goal!!!" className="goals-button" onClick={this.onSubmit.bind(this)}/>
					<div className="goals-list">
						<h1>Current Goals</h1>
						<GoalsList currentGoals={currentGoals} />
					</div>
				</div>
			</div>
		)
	}
}

CreateGoals = connect(mapStateToProps)(CreateGoals);

module.exports = CreateGoals;

