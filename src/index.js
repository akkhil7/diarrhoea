import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import reducers from './reducers';
import store from './store.js';
import './index.css';
import './components/App.css';

//let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
