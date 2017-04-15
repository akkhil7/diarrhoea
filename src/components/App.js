import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import CreateNote from './note/CreateNote';

const App = () => (
  <Router> 
    <div>
    	<Route exact path="/" component={Home}></Route>
    	<Route path="/create" component={CreateNote}></Route>
  	</div>
  </Router>
)

export default App;
