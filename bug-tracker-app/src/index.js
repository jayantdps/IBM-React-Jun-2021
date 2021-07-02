import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import store from './store';

import Bugs from './bugs';
import Projects from './projects';
   
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <h1>Bug Tracker</h1>
          <hr/>
          <Projects />
          <Bugs />
        </div>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)



//ES6 Modules
/*
import * as calculator from './calc';
console.log(calculator)
*/

/* 
import * as calculator from './calc';
const add = calculator.add;
console.log(add(100,200)); 
*/

/* 
import * as calculator from './calc';
const { add } = calculator;
console.log(add(100,200));  
*/

/* 
import { add } from './calc';
console.log(add(100,200));  
*/

//importing the default exported object
/* 
import calcObj from './calc'
console.log(calcObj) 
*/