import React, { Component } from 'react';

class App2 extends Component {
  render() {
    const text = "Are you awsome!?!";
    const condition = true;

    const styleBox={
      backgroundColor: 'grey',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    return (
      <div>
        <h1>Hello React!</h1>
        <h2>{text}</h2>
        <h3>
        { condition ? 'Yes~!' : 'No~ (T_T)'}
        { condition && 'Show me the money'}
        </h3>
        <div style={styleBox}></div>
      </div>
    );
  }
}

export default App2;
