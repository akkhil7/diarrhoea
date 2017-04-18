import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import CreateNote from './note/CreateNote';
import Login from './login/Login';
const App = () => (
  <Router> 
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/create" component={CreateNote}/>
    <Route path="/login" component={Login}/>
  </div>
  </Router>
)

export default App;
