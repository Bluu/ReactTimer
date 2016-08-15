const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const Main = require('main');
const Timer = require('timer');
const Countdown = require('countdown');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!application-styles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
