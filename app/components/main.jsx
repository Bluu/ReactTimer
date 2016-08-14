const React = require('react');
const Nav = require('nav');

const Main = props => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">  
          <p>Main.jsx Rendered!</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
