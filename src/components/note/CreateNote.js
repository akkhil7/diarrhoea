import React from 'react';
import { connect } from 'react-redux';
import { verifyCurrentUser } from '../../actions/userActions';
import { createNote } from '../../actions/noteActions';
import { quillUpdate } from '../../actions/noteActions';
import { uploadImage } from '../../actions/imageActions';
import store from '../../store.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar.js';
import Lightbox from 'react-images';
import Gallery from './Gallery';
import API from '../API';


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
          images: [],
          galleryButton: true
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
    var files = this.state.images
		console.log(entry);
		var id = this.props.currentUser.id;
		var note= {
			entry: entry,
			user_id: id 
		}
		console.log(note);
    this.props.dispatch(uploadImage(files))
    // this.props.dispatch(createNote(note));
	}

	closeLightbox(){
		this.setState({lightboxIsOpen: false})
	}

  onFileSelected(e){
    var file = e.target.files[0]
    // this.props.dispatch(uploadImage(file))
    var images = this.state.images;
    images.push(file);
    this.setState({images:images})
  }

  disableGalleryButton(){
    this.setState({galleryButton: false})
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
    if(!this.state.galleryButton){
      var galleryButton=<Gallery images={this.state.images}/>;
      var imageUpload=<div><div className="add-images"><p className="add-images-sign">+</p><p className="add-images-text">Add New Image</p></div><input type='file' className="image-upload"  onChange={this.onFileSelected.bind(this)}/></div>
    }
    else{
      var galleryButton=<button className="gallery-button" onClick={this.disableGalleryButton.bind(this)}><img src="cloud.svg" className="upload-icon" />UPLOAD IMAGES</button>
    }
		return(
			<div>
				<Navbar  isLight={true}/>
				<TopBar title="CREATE MEMORY" />
				<div className="create-form">
					  <div className="text-editor">
						  <input type="text" placeholder="Enter Title"/>
						  <ReactQuill value={this.props.entry} onChange={this.handleChange.bind(this)}  theme="snow" modules={quillModules} placeholder="Start Writing" formats={formats}/>
              {galleryButton} 
              {imageUpload}
            </div>
					  <button className = "note-submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			</div>
		)
	}
}

CreateNote = connect(mapStateToProps)(CreateNote);

export default CreateNote;
