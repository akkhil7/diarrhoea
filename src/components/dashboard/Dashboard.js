import React from 'react';
import Sidebar from '../style-components/sidebar';
import Wrapper from '../style-components/style';
import Button from '../style-components/button';
class Dashboard extends React.Component{
	render(){
		return(
			<Wrapper>
 				<Sidebar>Hello World, this is my first styled component!</Sidebar>
				<Button>Write</Button>
			</Wrapper>
		)
	}
}

module.exports = Dashboard;