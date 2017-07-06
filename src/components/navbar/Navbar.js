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
					<Link to='/dashboard'><li className="navbar-item"><span>DASHBOARD</span></li></Link>
					<Link to='/memories'><li className="navbar-item"><span>MEMORIES</span></li></Link>
          <Link to='/goals'><li className="navbar-item"><span>GOALS</span></li></Link>    
					<Link to='/settings'><li className="navbar-item"><span>SETTINGS</span></li></Link>
					<Link to='/logout'><li className="navbar-item"><span>LOGOUT</span></li></Link>
				</ul>
			</div>
		)
	}
}

module.exports = Navbar;
