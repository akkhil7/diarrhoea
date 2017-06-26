import React from 'react';
import Gravatar from './Gravatar'
class Navbar extends React.Component{
	render(){
		return(
			<div className='navbar'>
				<Gravatar />
			</div>
		)
	}
}

module.exports = Navbar;