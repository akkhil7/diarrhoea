import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import CreateNote from './note/CreateNote';
import Login from './login/Login';
import ViewNote from './note/ViewNote';
import Dashboard from './dashboard/Dashboard';

const App = () => (
  <Router> 
    <div>
    	<Route exact path="/" component={Home}></Route>
    	<Route path="/create" component={CreateNote}></Route>
      <Route path="/login" component={Login}></Route>
    	<Route path="/view" component={ViewNote}></Route>
    	<Route path='/dashboard' component={Dashboard}></Route>
  	</div>
  </Router>
)

export default App;
