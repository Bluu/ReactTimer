const React = require('react');
const Clock = require('clock');

const Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
