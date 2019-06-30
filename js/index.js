import React from 'react';
import ReactDOM from 'react-dom';
import '.index.css';
import App from './App';
import * as serviceWorker from '/serviceWorker';

let timer = 100;
let intervalID;
  ReactDOM.render(
  <h1>Hello React!</h1>, document.getElementById('id02'));

  function tick() {
    const element = (<h1>{new Date().toLocaleTimeString()}</h1>);
    ReactDOM.render(element, document.getElementById('id01'));
  }
  function tick2() {
    if(timer>0){
    timer = timer-1;
    const time = (<h1>{timer}</h1>);
    ReactDOM.render(time, document.getElementById('id03'));
    }
    else {
      ReactDOM.render(<h1>Time is up</h1>, document.getElementById('id03'));
      clearInterval(this.intervalID);
    }
  }

  function setTimer() {
    timer = 100;
    clearInterval(this.intervalID);
    intervalID = setInterval(tick2, 1000);
  }

  setInterval(tick, 1000);
  intervalID = setInterval(tick2,1000);
  setTimer();

serviceWorker.unregister();
