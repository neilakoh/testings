import React from 'react';
import ApolloClient from 'apollo-client';

class Insert extends React.Component {
  render() {
    return (
      <div>
        <h1>Sample Insert Record in Apollo</h1>
        <hr/>
        <input type="text" placeholder="Enter a name" ref="uname" />
        <button type="button" onClick={this.insert.bind(this)}>Insert Name</button>
      </div>
    );
  }

  insert() {
    console.log('test');
  }
}

export default Insert;
