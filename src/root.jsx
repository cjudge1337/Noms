import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired
};

export default Root;
