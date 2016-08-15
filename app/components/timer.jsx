const React = require('react');
const Clock = require('clock');
const CountControls = require('count-controls');

const Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countStatus !== prevState.countStatus) {
      switch (this.state.countStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: ++this.state.count
      })
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countStatus: newStatus
    });
  },
  render: function () {
    const { count, countStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <CountControls countdownStatus={countStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
