import React, { Component } from 'react';

import MyComponent from './MyComponent';  //Component 사용 선언

class App extends Component {
  render() {
    return (
      <MyComponent/>
    );
  }
}

var ua = navigator.userAgent,
scrollTopPosition,
iOS = /iPad|iPhone|iPod/.test(ua),
iOS11 = /OS 11_0|OS 11_1|OS 11_2|OS 12_1/.test(ua);

alert(ua + '\n ' + scrollTopPosition + '\n' + iOS + ' ' + iOS11);

export default App;
