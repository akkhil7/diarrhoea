import React from 'react';
import { connect } from 'react-redux';
import { currentUser } from '../../actions/userActions';

const mapStateToProps = (store) => {
  return {
    currentUser: store.user.currentUser
  }
}

//store.user (refers to which reducer we're pointing, now we need userReducer, so store.user)

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(currentUser())
  }
  render() {
    return(
      <h1> Hello world {this.props.user.username}</h1>
    )
  }
}

Home = connect(mapStateToProps)(Home)

export default Home;
