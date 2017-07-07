import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar.js';


class Goals extends React.Component{
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
	}

	render(){
		return(
			<div>
				<Navbar  isLight={true}/>
				<TopBar title="GOALS" />
				<div className="goals-form-wrapper">
					<h1>Enter your goal</h1>
					<input type="text" className="goals-field" ref="goal"/>
					<input type="submit" value="Set Goal!!!" className="goals-button" onClick={this.onSubmit.bind(this)}/>
				</div>
			</div>
		)
	}
}

module.exports = Goals;
