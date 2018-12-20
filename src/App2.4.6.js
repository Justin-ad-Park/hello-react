import React, { Component } from 'react';

import './App.2.4.6.css';

class App extends Component {
  render() {
    const text = "2.4.6 className!?!";
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
      <div className="my-div">
      {/* 요소 밖에서 주석은 이렇게 작성해요. */}
        <h1>React! 2.4.6</h1>
        <h2>{text}</h2>
        <div style={styleBox}
        //self-closed 태그에서만 작동하는 주석
        //마지막에 />가 꼭 주석과 다른 새 줄에 있어야 함
        /* 이렇게도 작성 가능합니다. */ 
        />
        
      </div>
    );
  }
}

export default App;
