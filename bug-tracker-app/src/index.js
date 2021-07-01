import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import './index.css';
import store from './store';
import bugActionCreators from './bugs/actions'
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
    const bugs = store.getState();
    ReactDOM.render(
        <React.StrictMode>
          <Bugs list={bugs} {...bugActionDispatchers} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
renderApp();
store.subscribe(renderApp);


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