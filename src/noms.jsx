import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  const store = configureStore(preloadedState);
  debugger
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.s = store.getState;
});
