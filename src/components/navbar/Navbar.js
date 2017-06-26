import React from 'react';
import Gravatar from './Gravatar'
class Navbar extends React.Component{
	render(){
		return(
			<div className='navbar'>
				<Gravatar />
				<ul  className="navbar-buttons">
					<li className="navbar-button">Dashboard</li>
					<li className="navbar-button">Goals</li>
					<li className="navbar-button">Memories</li>
					<li className="navbar-button">Settings</li>
					<li className="navbar-button">Logout</li>
				</ul>
			</div>
		)
	}
}

module.exports = Navbar;