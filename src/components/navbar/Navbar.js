import React from 'react';
import Gravatar from './Gravatar'
import {Link} from 'react-router-dom'
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
					<li className="navbar-item"><Link to='/dashboard'>Dashboard</Link></li>
					<li className="navbar-item"><Link to='/memories'>Memories</Link></li>
					<li className="navbar-item"><Link to='/goals'>Goals</Link></li>          
					<li className="navbar-item"><Link to='/settings'>Settings</Link></li>
					<li className="navbar-item"><Link to='/logout'>Logout</Link></li>
				</ul>
			</div>
		)
	}
}

module.exports = Navbar;
