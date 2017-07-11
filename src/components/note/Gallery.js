import React from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends React.Component{
	constructor(){
		super()
	}
	render(){
        var imgArray = this.props.images;
        
        var display = imgArray.map(function(image){
            return <GalleryItem image = {image} />
        })
		
        return(
			<div className="gallery">
                {display}
            </div>
			);
	}
}

module.exports = Gallery;