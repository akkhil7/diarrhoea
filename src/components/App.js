import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import CreateNote from './note/CreateNote';
import ViewNote from './note/ViewNote';

const App = () => (
  <Router> 
    <div>
    	<Route exact path="/" component={Home}></Route>
    	<Route path="/create" component={CreateNote}></Route>
    	<Route path="/view" component={ViewNote}></Route>
  	</div>
  </Router>
)

export default App;
