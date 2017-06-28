import React from 'react';
import { registerUser } from '../../actions/userActions';
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
  return {
    
  }
}

class Register extends React.Component{
	constructor(){
		super()
	}
    HandleSubmit(e) {
    	e.preventDefault;
    	var firstname = this.refs.firstname.value
    	var lastname = this.refs.lastname.value
    	var username = this.refs.username.value
    	var email = this.refs.email.value
    	var password = this.refs.password.value
    	var user={
    		first_name: firstname,
    		last_name: lastname,
    		username: username,
    		email: email,
    		password: password,
    	}
        console.log({user});
        this.props.dispatch(registerUser(user));
    }
	render(){
		return(
			<div>
                <div className="register-container">
            	   <input type = "text" ref = "firstname" placeholder = "First Name" name="firstname"/>
            	   <input type = "text" ref = "lastname" placeholder = "Last Name" name="lastname"/>
            	   <input type = "text" ref = "username" placeholder = "User Name" name="username" />
            	   <input type = "text" ref = "email" placeholder = "E-Mail" name="email" />
            	   <input type = "password" ref = "password" placeholder = "Password" name="encrypted_password" />
            	   <input type = "submit" label = "Sign Up" className="register" onClick = {this.HandleSubmit.bind(this)} />
			    </div>
            </div>
			);
	}
}
Register = connect(mapStateToProps)(Register);

module.exports = Register;