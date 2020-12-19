import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Store from './store/index';
const store = Store();
console.log('store', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
