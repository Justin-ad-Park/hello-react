import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App2_4 from './App2.4.6';
import App3_1 from './App3.1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('div'));
ReactDOM.render(<App2 />, document.getElementById('div2'));
ReactDOM.render(<App2_4 />, document.getElementById('div2_4'));
ReactDOM.render(<App3_1 />, document.getElementById('div3_1'));

registerServiceWorker();
