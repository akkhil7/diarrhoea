import React from 'react';
import { connect } from 'react-redux';
import { verifyCurrentUser } from '../../actions/userActions';
import { createNote } from '../../actions/noteActions';
import { quillUpdate } from '../../actions/noteActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const mapStateToProps = (store) => {
  return {
    currentUser: store.user.currentUser
  }
}

class CreateNote extends React.Component{

	constructor(props) {
  	  	super(props)
    	this.state = { text: '' }

  	}
	
	componentWillMount() {
    	this.props.dispatch(verifyCurrentUser())
  	}
   
  	handleChange(value) {
   		this.props.dispatch(quillUpdate(value))
  	}
	
	handleSubmit(){
		var entry = this.state.text;
		console.log(entry);
		var id = this.props.currentUser.id;
		var note= {
			entry: entry,
			user_id: id 
		}
		console.log(note);
		this.props.dispatch(createNote(note));
	}

	render(){
		var quillModules = {
			 toolbar: [
     		 [{ 'header': [1, 2, false] }],
     		 ['bold', 'italic', 'underline','strike', 'blockquote'],
     		 [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
     		 ['link', 'image'],
     		 ['clean']
    		],
		};
		var formats: [
   		 	'header',
   			'bold', 'italic', 'underline', 'strike', 'blockquote',
    		'list', 'bullet', 'indent',
   			'link', 'image'
  		];

		var entry = this.state.value;
		return(
			<div className="create-wrapper">
				<h1> Hello world {this.props.currentUser.username}</h1>
				<div className="text-editor">
					<ReactQuill value={this.state.text} onChange={this.handleChange.bind(this)}  theme="snow" modules={quillModules} placeholder="Start Writing......................." formats={formats}/>
				</div>
				<button className = "note-submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}
}

CreateNote = connect(mapStateToProps)(CreateNote);

export default CreateNote;
