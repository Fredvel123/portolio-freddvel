import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
// styles Global
import './index.css'
// reducx
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';


ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
