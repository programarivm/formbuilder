import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
