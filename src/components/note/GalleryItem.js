import React from 'react';

class GalleryItem extends React.Component{
	constructor(){
		super()
		this.state = {
			backgroundUrl: ""
		}
	}


	componentDidMount(){
		var file = this.props.image;
   		var reader = new FileReader();
   		reader.onloadend = () => {
      		const backgroundUrl = "url(" + reader.result + ")";  
      		this.setState({backgroundUrl: backgroundUrl})      
   		}
   		if(file){
      		reader.readAsDataURL(file);
    	}
	}
	render(){
        var getImagePath = this.state.backgroundUrl
 
		const divStyles = {
			backgroundImage: getImagePath,
			border: '1px solid black'
		};
		console.log(divStyles)

		return(
			<div style={divStyles} className="gallery-item" >
            </div>
			);
	}
}

module.exports = GalleryItem;