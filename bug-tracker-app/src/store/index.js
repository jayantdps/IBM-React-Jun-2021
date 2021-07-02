import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    projectsState : projectsReducer,
    bugsState : bugsReducer
});

/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log("Before ", store.getState())
            console.log("Action ", action);
            next(action);
            console.log("After ", store.getState())
            console.groupEnd();
        }
    }
}

function asyncMiddleware({dispatch, getState}){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                action(dispatch, getState)
            } else {
                next(action)
            }
        }
    }
} */

//const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

const promiseMiddleware = store => next => async action => {
    if (action instanceof Promise){
        const actionObj = await action;
        store.dispatch(actionObj)
    } else {
        next(action);
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk, promiseMiddleware));

export default store;