const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const Main = require('main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!application-styles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      
    </Route>
  </Router>,
  document.getElementById('app')
);
