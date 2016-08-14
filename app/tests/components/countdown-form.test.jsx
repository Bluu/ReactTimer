var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var CountdownForm = require('countdown-form');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = null;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(null);
  });
});
