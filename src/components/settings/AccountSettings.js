import React from 'react';

class AccountSettings extends React.Component{
	onSubmit(e){
			e.preventDefault();
			var inputNodes = document.getElementsByTagName('input');
			for(var i =0;i<inputNodes.length;i++) {
				inputNodes[i].classList.remove("error");
			}
			console.log(inputNodes)
			this.checkEmail();
			this.checkEmpty();
	}

	checkEmail() {
			var email=this.refs.email.value;
			console.log(email);
			var re = /\S+@\S+\.\S+/;
			var result=re.test(email);
			if(result==false){
				setTimeout(() => {
					var field=document.getElementsByClassName("email-field")[0].classList.add("error")

				}, 50)
			}
	}

	checkEmpty() {
		var firstName = this.refs.firstName.value;
		var lastName = this.refs.lastName.value;
		if(!firstName){
			setTimeout(() => {
					document.getElementsByClassName("first-field")[0].classList.add("error")

			}, 50)
		}
		if(!lastName){
			setTimeout(() => {
					document.getElementsByClassName("last-field")[0].classList.add("error")

			}, 50)
		}

	}
	render(){
		return(
			<div>				
				<h1>Account</h1>
				<h2>Personal Info</h2>
				<div className="personal-info-wrapper">
					<h3 className="personal-info-item">First Name</h3>
					<h3 className="personal-info-item">Last Name</h3>
					<input type="text" className="first-field" ref="firstName"/>
					<input type="text" className="last-field" ref="lastName"/>
					<h3 className="personal-info-item">Email</h3>
					<h3 className="personal-info-item">Website(optional)</h3>
					<input type="text" className="email-field" ref="email"/>
					<input type="text" className="last-field" />
					<h3 className="personal-info-item">Bio(optional)</h3>
					<textarea className="bio-field"  ref="bio" rows="8"></textarea>
				</div>
				<input type="submit" label="submit" className="submit-button" onClick={this.onSubmit.bind(this)}/>
			</div>
		)
	}
}

module.exports = AccountSettings;