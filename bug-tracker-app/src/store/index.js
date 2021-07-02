import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    projectsState : projectsReducer,
    bugsState : bugsReducer
});

function loggerMiddleware(store){
    return function(next /* reference to the next middleware in the middleware chain */){
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

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;