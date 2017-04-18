import React from 'react';
import Sidebar from '../style-components/sidebar';
import Wrapper from '../style-components/style';

class Dashboard extends React.Component{
	render(){
		return(
			<Wrapper>
 					<Sidebar>Hello World, this is my first styled component!</Sidebar>
			</Wrapper>
		)
	}
}

module.exports = Dashboard;