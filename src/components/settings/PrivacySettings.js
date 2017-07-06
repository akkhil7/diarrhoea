import React from 'react';

class PrivacySettings extends React.Component{
	onSubmit(){
			var inputNodes = document.getElementsByTagName('input');
			for(var i =0;i<inputNodes.length;i++) {
				inputNodes[i].classList.remove("error");
			}
			this.checkPassword();
	}
	checkPassword(){
		var newPassword = this.refs.newPassword.value;
		var confirmPassword = this.refs.confirmPassword.value;
		if(newPassword!=confirmPassword){
			console.log("error")
			setTimeout(()=>{
				document.getElementsByClassName("new-password")[0].classList.add("error");
				document.getElementsByClassName("confirm-password")[0].classList.add("error")
			})
		}
	}
	render(){
		return(
			<div>				
				<h1>Privacy</h1>
				<h2>Password</h2>
				<div className="personal-info-wrapper">
					<h3 className="personal-info-item">Old Password</h3>
					<input type="password" className="old-password"/>
					<h3 className="personal-info-item">New Password</h3>
					<input type="password" className="new-password" ref="newPassword"/>
					<h3 className="personal-info-item">Confirm Password</h3>
					<input type="password" className="confirm-password"ref="confirmPassword"/>
				</div>
				<input type="submit" label="submit" className="password-button" onClick={this.onSubmit.bind(this)}/>
			</div>
		)
	}
}

module.exports = PrivacySettings;