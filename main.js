import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Demo1 from './components/Demo1';
const Main = () => {
  return (
    <Router history={browserHistory}>
      <Route path='demo1' component={Demo1}/>
    </Router>
  )
};


render(
  <Main />,
  document.getElementById('container')
);