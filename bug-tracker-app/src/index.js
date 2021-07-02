import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.css';
import store from './store';

import Bugs from './bugs';
import Projects from './projects';
import Home from './Home';

   
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div>
            <h1>Bug Tracker</h1>
            <div>
              <span> [ <Link to="/">Home</Link> ] </span>
              <span> [ <Link to="/projects">Projects</Link> ] </span>
              <span> [ <Link to="/bugs">Bugs</Link> ] </span>
            </div>
            <hr/>
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/bugs">
                <Bugs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
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