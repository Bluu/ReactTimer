const React = require('react');

const CountControls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };

    return (
      <div className="count-controls">
        { renderStartStopButton() }
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = CountControls;
