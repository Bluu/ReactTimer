const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

var Timer = require('timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCount', () => {
    it('should set state to started and count', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause count on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({
        count: 3
      });
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.countStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({
        count: 3
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
