import React from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { verifyCurrentUser } from '../../actions/userActions';

const mapStateToProps = (store) => {
  return {
    currentUser: store.user.User
  }
}

class CreateNote extends React.Component{
	
	componentWillMount() {
    	this.props.dispatch(verifyCurrentUser())
  	}
	
	state = {
   		value: RichTextEditor.createEmptyValue()
  	}
   
    onChange = (value) => {
   		this.setState({value});
  	};
	
	render(){
		var entry = this.state.value.toString('html');
		return(
			<div>
				<h1> Hello world {this.props.currentUser.username}</h1>
				<div>
				<RichTextEditor
          		value={this.state.value}
          		onChange={this.onChange.bind(this)}
        		/>
				</div>
			</div>
		)
	}
}

CreateNote = connect(mapStateToProps)(CreateNote);

export default CreateNote;
