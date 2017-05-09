import React from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { verifyCurrentUser } from '../../actions/userActions';
<<<<<<< HEAD
import API from '../API';
import { createNote } from '../../actions/noteActions';

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
	
	handleSubmit(){
		var entry = this.state.value.toString('html');
		var id = this.props.currentUser.id;
		var note= {
			entry: entry,
			id: id 
		}
		this.props.dispatch(createNote(note));
	}


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
