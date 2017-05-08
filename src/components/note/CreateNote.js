import React from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { verifyCurrentUser } from '../../actions/userActions';
import API from '../API';

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
		var url = API.url('notes');
		var note={
			entry: entry,
			id: id
		}
        var success = (res) => {
            console.log("New note added successfully");
        }
        var failure = (res) => {
            console.log("Failed to add new note");
        }
        API.post(url,note,success,failure)
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
        		<button onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
				</div>
			</div>
		)
	}
}

CreateNote = connect(mapStateToProps)(CreateNote);

export default CreateNote;
