import React from 'react';
import Navbar from '../navbar/Navbar.js';
import AccountSettings from './AccountSettings.js';
import PrivacySettings from './PrivacySettings.js';
import DiarySettings from './DiarySettings.js';


class Settings extends React.Component{
	constructor() {
    	super()
    		this.state = {
      			current:"account"
    		}
  	}
	
	componentDidMount() {
		var node = document.getElementsByClassName('settings-button')[0]
		this.changeStyle(node);

	}
	loadSettings(e){
		var value= e.currentTarget.dataset.id;
		console.log(value)
		this.setState({current:value}, this.changeStyle(e.currentTarget))
	}

	changeStyle(node){
		this.clearBorders();
		node.style.borderBottom = '4px solid #00a2ff';

	}
	clearBorders() {
		const otherNodes = document.getElementsByClassName('settings-button');
		for(var i=0;i<otherNodes.length;i++)
			otherNodes[i].style.borderBottom = '';
	}

	render(){
		var display = <AccountSettings/>;
		if(this.state.current=="account")
			var display=<AccountSettings />
		else if(this.state.current=="privacy")
			var display=<PrivacySettings />
		else if(this.state.current=="diary")
			var display=<DiarySettings />
		return(
			<div>
				<Navbar isLight={true} />
				<div className="settings-bar">
					<ul>
						<li className="settings-button" onClick={this.loadSettings.bind(this)} data-id="account">Account</li>
						<li className="settings-button" onClick={this.loadSettings.bind(this)} data-id="privacy">Privacy</li>
						<li className="settings-button"onClick={this.loadSettings.bind(this)} data-id="diary">Diary</li>
					</ul>
				</div>
				<div className="current-settings">
					{display}
				</div>
			</div>
		)
	}
}

module.exports = Settings;