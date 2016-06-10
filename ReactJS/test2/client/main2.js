import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class App2 extends Component {
  render () {
    return (
      <div className="container">
        <header>
          <h1>Simple Way</h1>
        </header>

        <ul>
          TEST<br/>TEST<br/>TEST<br/>TEST
        </ul>
      </div>
    )
  }
}

Meteor.startup(() => {
  render(<App2 />, document.getElementById('app2'));
});
