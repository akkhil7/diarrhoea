import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class ViewNote extends React.Component{
	render(){
		var html = "<p>hellooo my name is mrinal how are you?</p>"
		return(
			<div>{ ReactHtmlParser(html) }</div>
		)
	}

}

module.exports = ViewNote;