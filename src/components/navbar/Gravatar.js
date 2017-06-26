import React from 'react';
import crypto from 'crypto';

class Gravatar extends React.Component{
	render(){
		var email = "mrinal.krishnan06@gmail.com"
    		var size = 100
    		var hash = crypto.createHash('md5').update(email).digest("hex")
    		var src ="http://www.gravatar.com/avatar/"+hash+"?s="+size+"&d=retro";
		return(
			<div className="gravatar">
    			<img className="pro-image" src={src} />
    		</div>
		)
	}
}

module.exports = Gravatar;