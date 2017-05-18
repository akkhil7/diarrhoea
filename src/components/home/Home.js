import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions/userActions';

const mapStateToProps = (store) => {
  return {
    currentUser: store.user.currentUser
  }
}

//store.user (refers to which reducer we're pointing, now we need userReducer, so store.user)

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCurrentUser())
  }
  render() {
    return(
      <div>
        <h1> Hello world {this.props.currentUser.username}</h1>
        <button className="hello-btn">Hello</button>
      </div>
    )
  }
}

Home = connect(mapStateToProps)(Home)

export default Home;
