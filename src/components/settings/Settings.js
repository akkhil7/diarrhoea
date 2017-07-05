import React from 'react';
import Navbar from '../navbar/Navbar.js';
import AccountSettings from './AccountSettings.js';
import PrivacySettings from './PrivacySettings.js';
import DiarySettings from './DiarySettings.js';
import { connect } from 'react-redux';
import {loadSettings} from '../../actions/settingsActions';
const mapStateToProps = (store) => {
  return {
  current: store.settings.current
  }
}
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
		const changeStyle = () => {
			console.log("Im getting called too")
			this.changeStyle(e.currentTarget)
		}
		// this.setState({current:value}, this.changeStyle(e.currentTarget))
		this.props.dispatch(loadSettings(value, changeStyle))
	}

	changeStyle(node){
		console.log("Im getting called")
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
		if(this.props.current=="account")
			var display=<AccountSettings />
		else if(this.props.current=="privacy")
			var display=<PrivacySettings />
		else if(this.props.current=="diary")
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

Settings = connect(mapStateToProps)(Settings);

module.exports = Settings;
