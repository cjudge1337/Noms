import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.s = store.getState;
});
