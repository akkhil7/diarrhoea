import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import CreateNote from './note/CreateNote';
import Login from './login/Login';
import ViewNote from './note/ViewNote';
import Dashboard from './dashboard/Dashboard';
import Story from './story/Story';
import Register from './register/Register';
import Settings from './settings/Settings';
import Memory from './memories/Memory';
import CreateGoals from './goals/CreateGoals';

const App = () => (
  <Router> 
    <div id='router'>
    	<Route exact path="/" component={Home}></Route>
    	<Route path="/create" component={CreateNote}></Route>
      <Route path="/login" component={Login}></Route>
       <Route path="/register" component={Register}></Route>
    	<Route path="/view" component={ViewNote}></Route>
      <Route path="/memories" component={Memory}></Route>
    	<Route path='/dashboard' component={Dashboard}></Route>
    	<Route path='/story' component={Story}></Route>
      <Route path='/settings' component={Settings}></Route>
      <Route path='/goals' component={CreateGoals}></Route>

  	</div>
  </Router>
)

export default App;
