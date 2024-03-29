import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar.js';
import { connect } from 'react-redux';
import {fetchGoals,createGoal} from '../../actions/goalsActions';
import  GoalsList  from './GoalsList';
import { verifyCurrentUser } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => {
  return {
  	currentGoals: store.goals.goals,
    verifiedUser: store.user.verifiedUser,
    verifyingUser: store.user.verifyingUser

  }
}

class CreateGoals extends React.Component{
	constructor() {
    	super()
    		this.state = {
     			display: "false",
     			goals: []
    		}
  	}
  	
	componentDidMount(){
		this.props.dispatch(fetchGoals(this.callBackFn.bind(this)));

	}

  componentWillMount() {
    this.props.dispatch(verifyCurrentUser());
  }


	callBackFn(res) {
		this.setState({goals: res})
	}
	onSubmit(e){
			if(e.charCode == 13){
			var inputNodes = document.getElementsByTagName('input')[0];
			inputNodes.classList.remove("error");
			this.checkGoals()
		}
	}
	
	checkGoals() {
			var goal=this.refs.goal.value
			var currentGoals=this.state.goals
			currentGoals.push(goal);
			if(!goal){
				setTimeout(() => {
					document.getElementsByClassName("goals-field")[0].classList.add("error")

				}, 50)
			}
			else{
				this.props.dispatch(createGoal(goal,this.createCallBack.bind(this)))	
			}
	}

	createCallBack(desc){
		var goal={
			description: desc
		}
		var currentGoals=this.state.goals;
		currentGoals.push(goal);
		this.setState({goals:currentGoals})

	}

	display(e){
		e.preventDefault()
		this.setState({display: !this.state.display})
	}


  renderLogin() {
    return(
      <Redirect to='login' />
    )
  }

  render() {
    console.log(this.props.verifyingUser)
    if(this.props.verifyingUser || (!this.props.verifyingUser && !this.props.verifiedUser))
      return this.renderLoading()
    else if(this.props.verifiedUser)
      return this.renderPage()
    else
      return this.renderLogin()
  }

  renderLoading() {
    return (
      <h2> LOADING </h2>
    )
  }


	renderPage(){
		const currentGoals = this.state.goals;
		var display = ""
		if(this.state.display){
			display = ""
		}
		else if(!this.state.display){
			display = <div className="goals-form"><input type="text" className="goals-input" ref="goal" onKeyPress={this.onSubmit.bind(this)}/></div>
		}

		console.log(currentGoals);
		return(
			<div>
				<Navbar isLight={true}/>
				<TopBar title="GOALS" />
				<div className="goals-form-wrapper">
						<h1>Goals</h1>
						<GoalsList currentGoals={currentGoals} />
						{display}
						<div onClick={this.display.bind(this)} className="add-goals">
							<p className="add-goals-sign">+</p>
							<p className="add-goals-text">Add New Goal</p>
						</div>
				</div>
			</div>
		)
	}
}

CreateGoals = connect(mapStateToProps)(CreateGoals);

module.exports = CreateGoals;

