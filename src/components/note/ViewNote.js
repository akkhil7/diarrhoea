import React from 'react';
import Parser from 'react-html-parser';

class ViewNote extends React.Component{
	render(){
		var html = "<p>hellooo my name is mrinal how are you?</p>"
		return(
			<div>{ Parser(html) }</div>
		)
	}

}

module.exports = ViewNote;
