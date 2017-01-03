import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import DragDemo from './components/DragDemo';
import ModalDemo from './components/RodalDemo';

const Main = ()=>{
  return  (
    <Router history={browserHistory}>
      <Route path='drag' component={DragDemo} />
      <Route path='rodal' component={ModalDemo} />
    </Router>
  )
};



render(
  <Main />,
  document.getElementById('container')
);