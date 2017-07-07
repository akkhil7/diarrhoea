import React from 'react';
import _ from 'lodash';
import { fetchCurrentUser } from '../../actions/userActions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    token: store.user.token,
    fetched: store.user.fetched,
    fetching: store.user.fetching
  }
}


class Login extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.refs.username.value)
    const credentials = {
      user: {
        username: this.refs.username.value,
        password: this.refs.password.value
      }
    }
  this.props.dispatch(fetchCurrentUser(credentials))
  }

  render() {
    return(
      <div>
        <input type="text" ref="username" />
        <input type="password" ref="password" />
        <button onClick={this.handleSubmit}> submit </button>
      </div>
    )
  }
}

Login = connect(mapStateToProps)(Login)
export default Login;
