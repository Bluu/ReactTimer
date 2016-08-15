const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const CountControls = require('count-controls');

describe('CountControls', () => {
  it('should exist', () => {
    expect(CountControls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      const countControls = TestUtils.renderIntoDocument(<CountControls countdownStatus="started" onStatusChange={() => {}}/>);
      const $el = $(ReactDOM.findDOMNode(countControls));
      const $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start button when paused', () => {
      const countControls = TestUtils.renderIntoDocument(<CountControls countdownStatus="paused" onStatusChange={() => {}}/>);
      const $el = $(ReactDOM.findDOMNode(countControls));
      const $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
