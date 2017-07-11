import React from 'react';
import { connect } from 'react-redux';
import { verifyCurrentUser } from '../../actions/userActions';
import { createNote } from '../../actions/noteActions';
import { quillUpdate } from '../../actions/noteActions';
import store from '../../store.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar.js';
import Lightbox from 'react-images';
import Gallery from './Gallery';
const mapStateToProps = (store) => {
  return {
    currentUser: store.user.currentUser,
    entry: store.note.text
  }
}

class CreateNote extends React.Component{

	constructor(props) {
  	  	super(props)
    	  this.state = { 
    		  text: '',
    		  lightboxIsOpen:false,
    		  thumbnailsIsopen: true,
    		  backDrop: true,
          images: []
        }
  	}
	
	componentWillMount() {
    	this.props.dispatch(verifyCurrentUser())
  	}
   
  	handleChange(value) {
   		this.props.dispatch(quillUpdate(value))
   		console.log(this.props.entry)
  	}
	
	handleSubmit(){
		var entry = this.props.entry;
		console.log(entry);
		var id = this.props.currentUser.id;
		var note= {
			entry: entry,
			user_id: id 
		}
		console.log(note);
		this.props.dispatch(createNote(note));
	}

	closeLightbox(){
		this.setState({lightboxIsOpen: false})
	}

  onFileSelected(e){
    var file = e.target.files[0]
    var images = this.state.images;
    images.push(file);
    this.setState({images:images})
  }
	render(){
    console.log(this.state.images)
		var quillModules = {
			 toolbar: [
     		 [{ 'header': [1, 2, false] }],
     		 ['bold', 'italic', 'underline','strike', 'blockquote'],
     		 [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
     		 ['link'],
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
			<div>
				<Navbar  isLight={true}/>
				<TopBar title="CREATE MEMORY" />
				<div className="create-form">
            <Gallery images={this.state.images}/> 
					  <Lightbox
        		images={[{ src: 'https://facebook.github.io/react/img/logo_og.png'}]}
        		isOpen={this.state.lightboxIsOpen}
        		onClickPrev={this.gotoPrevious}
        		onClickNext={this.gotoNext}
        		onClose={this.closeLightbox.bind(this)}
        		showThumbnails={this.state.thumbnailsIsopen}
        		backdropClosesModal={this.state.backDrop}
      			/>
      			<input type='file' className="image-upload"  onChange={this.onFileSelected.bind(this)}/>
					  <div className="text-editor">
						  <input type="text" placeholder="Enter Title"/>
						  <ReactQuill value={this.props.entry} onChange={this.handleChange.bind(this)}  theme="snow" modules={quillModules} placeholder="Start Writing" formats={formats}/>
					  </div>
					  <button className = "note-submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			</div>
		)
	}
}

CreateNote = connect(mapStateToProps)(CreateNote);

export default CreateNote;
