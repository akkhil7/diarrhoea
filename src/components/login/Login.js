import React from 'react';
import _ from 'lodash';
import { fetchCurrentUser } from '../../actions/userActions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    currentUser: store.user.currentUser
  }
}


class Login extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.refs.username.value)
    const credentials = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.dispatch(fetchCurrentUser(credentials))
    

  }
  render() {
    return(
      <div>
        <input type="text" ref="username" />
        <input type="password" ref="password" />
        <button onClick={this.handleSubmit}> submit </button>
        {this.props.currentUser.access_token}
      </div>
    )
  }
}

Login = connect(mapStateToProps)(Login)
export default Login;
