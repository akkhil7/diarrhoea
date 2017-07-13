import React from 'react';
import Navbar from '../navbar/Navbar.js';
import AccountSettings from './AccountSettings.js';
import PrivacySettings from './PrivacySettings.js';
import DiarySettings from './DiarySettings.js';
import { connect } from 'react-redux';
import {loadSettings} from '../../actions/settingsActions';
import { verifyCurrentUser } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (store) => {
  return {
    current: store.settings.current,
    verifiedUser: store.user.verifiedUser,
    verifyingUser: store.user.verifyingUser,
  }
}
class Settings extends React.Component{
  constructor() {
    super()
    this.state = {
      current: "account"
    }
  }
  
  componentWillMount() {
    this.props.dispatch(verifyCurrentUser());
  }
  
  loadSettings(e){
    var value= e.currentTarget.dataset.id;
    console.log(value)
    // this.setState({current:value}, this.changeStyle(e.currentTarget))
    this.props.dispatch(loadSettings(value))
  }

  renderLogin() {
    return(
      <Redirect to='login' />
    )
  }

  render() {
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
//to set account as initial blue border

    var display = <AccountSettings/>;
    var accountClass = "settings-button"
    var privacyClass = "settings-button"
    var diaryClass = "settings-button"
    if(this.props.current=="privacy") {
      display = <PrivacySettings />
      privacyClass+= " selected"
    }
    else if(this.props.current=="diary") {
      display = <DiarySettings />
      diaryClass+= " selected"
    }
    else {
      display = <AccountSettings />
      accountClass+= " selected"
    }

    return(
      <div>
        <Navbar isLight={true} />
        <div className="settings-bar">
          <ul>
            <li className={accountClass}
              onClick={this.loadSettings.bind(this)} 
              data-id="account"> Account </li>
            <li className={privacyClass} 
              onClick={this.loadSettings.bind(this)} 
              data-id="privacy"> Privacy </li>
            <li className={diaryClass} 
              onClick={this.loadSettings.bind(this)} 
              data-id="diary"> Diary </li>
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
