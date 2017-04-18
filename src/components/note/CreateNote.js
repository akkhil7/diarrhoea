import React from 'react';
import RichTextEditor from 'react-rte';

class CreateNote extends React.Component{
	
	state = {
   		value: RichTextEditor.createEmptyValue()
  	}
   
    onChange = (value) => {
   		this.setState({value});
  	};
	
	render(){
		var entry = this.state.value.toString('html');
		console.log(entry);
		return(
			<div>
				<RichTextEditor
          		value={this.state.value}
          		onChange={this.onChange.bind(this)}
        		/>
			</div>
		)
	}
}

module.exports = CreateNote;
