import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class App3 extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>The Object Array Way</h1>
        </header>

        <ul>
          {this.getTasks()[0]._id}
        </ul>
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App3 />, document.getElementById('app3'));
});
