import React from 'react';
import Gravatar from './Gravatar'
class Navbar extends React.Component{
	render(){
    if(this.props.isLight)
      var navbarClass = "navbar light"
    else
      var navbarClass = "navbar"
		return(
			<div className={navbarClass}>
				<Gravatar />
				<ul className="navbar-menu">
					<li className="navbar-item">Dashboard</li>
					<li className="navbar-item">Memories</li>
					<li className="navbar-item">Goals</li>          
					<li className="navbar-item">Settings</li>
					<li className="navbar-item">Logout</li>
				</ul>
			</div>
		)
	}
}

module.exports = Navbar;
