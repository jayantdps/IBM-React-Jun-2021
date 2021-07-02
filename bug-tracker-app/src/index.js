import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import './index.css';
import store from './store';
import bugActionCreators from './bugs/actions'
import Bugs from './bugs';

import projectActionCreators from './projects/actions';
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

function renderApp(){
    
    const storeState = store.getState(),
      projects = storeState.projectsState,
      bugs = storeState.bugsState;

    ReactDOM.render(
        <React.StrictMode>
          <div>
            <h1>Bug Tracker</h1>
            <hr/>
            <Projects projectsList={projects} {...projectActionDispatchers} />
            <Bugs list={bugs} {...bugActionDispatchers} />
          </div>
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